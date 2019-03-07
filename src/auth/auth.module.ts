import { UserService } from 'shared/user.service';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';

@Module({
    controllers: [AuthController],
    imports: [UserService]
})
export class AuthModule { }
