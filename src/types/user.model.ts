import { Address } from './address.model';
import { Document, Types } from 'mongoose';

export interface User extends Document {
    name: string;
    password: string;
    seller: boolean;
    address: Address;
    created_at: Date;
    updated_at: Date;
}