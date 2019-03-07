import { Schema, HookNextFunction } from 'mongoose';
import { AddressSchema } from './address.schema';
import * as bcrypt from 'bcrypt';

export const UserSchema = new Schema({
    name: String,
    password: String,
    seller: {
        type: Boolean,
        default: false
    },
    address: AddressSchema
}, {
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
    });


UserSchema.pre('save', async function (next: HookNextFunction) {
    try {
        if (!this.isModified('password')) {
            next();
        }
    } catch (error) {
        const hashed = await bcrypt.hash(this['password'], process.env.SALT_ROUNDS);
        this['password'] = hashed;
        return next(error);
    }
});