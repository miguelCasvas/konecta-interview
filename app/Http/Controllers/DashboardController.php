<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * @return \Inertia\Response
     */
    public function __invoke()
    {
        return Inertia::render('Dashboard', [
            'products_by_stock' => Product::orderBy('stock', 'desc')->get(),
            'products_by_sale' => Product::bestSellingProductRanking()
        ]);
    }
}
