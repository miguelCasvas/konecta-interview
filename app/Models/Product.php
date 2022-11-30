<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

/**
 * @property int $stock
 * @property string $name
 * @property double $price
 */
class Product extends Model
{
    /** @type int */
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

    public static function bestSellingProductRanking()
    {
        $query = <<<EOF
            SELECT ps.id, voice_products.*
            FROM products_sales as ps,
                 JSON_TABLE(ps.products_schema, '$[*]' COLUMNS (
                     product_id INT PATH '$.productId',
                     product_name VARCHAR(150) PATH '$.productName',
                     quantity VARCHAR(150) PATH '$.quantity'
                     )) AS voice_products order by product_id;
        EOF;


        $data = DB::select($query);
        $dataReturn = [];

        foreach ($data as $datum) {
            $datum->quantity = (int) $datum->quantity;
            $productId = $datum->product_id;

            if (!isset($dataReturn[$productId])) {
                $dataReturn[$productId] = $datum;
            } else {
                $dataReturn[$productId]->quantity += $datum->quantity;
            }
        }

        usort($dataReturn, function ($a, $b) {
            if ($a->quantity == $b->quantity) {
                return 0;
            }

            return ($a->quantity > $b->quantity) ? -1 : 1;
        });

        return $dataReturn;
    }
}
