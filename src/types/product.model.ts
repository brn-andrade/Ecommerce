import { User } from './user.model';
import { Document, Types } from 'mongoose';

export interface Product extends Document {
    owner: Types.ObjectId | User;
    tittle: string;
    description: string;
    image: string;
    price: number;
    created_at: Date;
    updated_at: Date;
}