import { Schema } from 'mongoose';

export const AddressSchema = new Schema({
    street: String,
    number: String,
    city: String,
    state: String,
    zip_code: String,
    district: String
}, {
        timestamps:
            { createdAt: 'created_at', updatedAt: 'updated_at' }
    });
