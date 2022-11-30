<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $stock
 * @property string $name
 * @property double $price
 */
class Product extends Model
{
    /** @type int  */
    const MINIMUM_STOCK = 1;

    use HasFactory;

    protected $fillable = [
        'name',
        'reference',
        'price',
        'weight',
        'category',
        'stock',
    ];

    /**
     * @return bool
     */
    public function stockSoldOut(): bool
    {
        return $this->stock < self::MINIMUM_STOCK;
    }
}
