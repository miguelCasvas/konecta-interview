<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property int $id
 * @property string $invoice_serial
 * @property string $products_schema
 * @property float $total
 * @property int $user_id
 */
class productsSale extends Model
{
    use HasFactory;
}
