<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Inertia\Inertia;

class ProductController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function index()
    {
        return Inertia::render('Products/Index', [
            'products' => Product::paginate(),
        ]);
    }

    /**
     * @param Request $request
     * @return Application|RedirectResponse|Redirector
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'reference' => 'required',
            'price' => 'required',
            'weight' => 'required',
            'category' => 'required',
            'stock' => 'required',
        ]);

        Product::create($validated);

        return redirect(route('products.index'));
    }

    /**
     * @param Request $request
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function update(Request $request, Product $product)
    {
        $validated = $request->validate([
            'name' => 'required',
            'reference' => 'required',
            'price' => 'required',
            'weight' => 'required',
            'category' => 'required',
            'stock' => 'required',
        ]);

        $product->update($validated);

        return redirect(route('products.index'));
    }

    /**
     * @param Product $product
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return redirect(route('products.index'));
    }
}
