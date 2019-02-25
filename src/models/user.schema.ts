import { Schema } from 'mongoose';
import { AddressSchema } from './address.schema';

export const UserSchema = new Schema({
    name: String,
    password: String,
    seller: {
        type: Boolean,
        default: false,
    },
    address: AddressSchema,
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },

    });
