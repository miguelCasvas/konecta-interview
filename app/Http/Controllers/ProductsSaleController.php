<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\productsSale;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\DB;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Throwable;

class ProductsSaleController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('ProductsSale/Index', [
            'products' => Product::all(),
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        $invoiceSerial = 'UNDEFINED';

        try {
            DB::beginTransaction();
            $invoiceProducts = $request->get('invoice');
            $invoiceSerial = $request->get('invoiceSerial');

            $total = 0;
            foreach ($invoiceProducts as $product) {

                /** @var Product $systemProduct */
                $systemProduct = Product::find($product['productId']);

                if ($systemProduct->stockSoldOut()){
                    $msg = sprintf('El producto %s no cuenta con stock suficiente para la vta.', $systemProduct->name);
                    throw ValidationException::withMessages(['message' => $msg]);
                }

                $systemProduct->stock = $systemProduct->stock - $product['quantity'];
                $systemProduct->save();

                $total += $systemProduct->price * $product['quantity'];
            }

            $productsSale = new productsSale();
            $productsSale->invoice_serial = $invoiceSerial;
            $productsSale->products_schema = json_encode($invoiceProducts);
            $productsSale->total = $total;
            $productsSale->user_id = auth()->user()->id;
            $productsSale->save();

            DB::commit();

            return redirect(route('sales.index'));
        } catch (ValidationException $exception) {
            DB::rollBack();

            throw $exception;
        } catch (Throwable $exception) {
            DB::rollBack();

            $msg = sprintf('Error al generar la factura %s', $invoiceSerial);
            throw ValidationException::withMessages(['message' => $msg, 'trace' => $exception->getTraceAsString()]);
        }
    }
}
