import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from 'types/user.model';

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>) { }

    private removePassword(user: User) {
        return user.depopulate('password');
    }

    create() {}
    findByLogin() { }
}
