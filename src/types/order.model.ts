import { User } from './user.model';
import { Product } from './product.model';
import { Document, Types } from 'mongoose';

export interface Order extends Document {
    owner: Types.ObjectId | User,
    total: number,
    products: ProductItem[]
    created_at: Date,
    updated_at: Date
}

export interface ProductItem extends Document {
    product: Types.ObjectId | Product,
    quantity: number
}