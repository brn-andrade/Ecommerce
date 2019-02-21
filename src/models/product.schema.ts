import { Schema, Types } from 'mongoose';

export const ProductSchema = new Schema({
    owner: {
        type: Types.ObjectId,
        ref: 'User'
    },
    tittle: String,
    description: String,
    image: String,
    price: Number
}, {
        timestamps:
            { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
