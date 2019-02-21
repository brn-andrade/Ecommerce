import { Schema, Types } from 'mongoose';

export const OrderSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    total: {
        type: Number,
        default: 0
    },
    products: [
        {
            product: {
                type: Types.ObjectId,
                ref: 'Product'
            },
            quantity: {
                type: Number,
                default: 0
            }
        }
    ]
}, {
        timestamps:
            { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
