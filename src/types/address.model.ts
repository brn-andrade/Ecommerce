import { Document, Types } from 'mongoose';

export interface Address extends Document {
    street: string;
    number: string;
    city: string;
    state: string;
    zip_code: string;
    district: string;
    created_at: Date;
    updated_at: Date;
}