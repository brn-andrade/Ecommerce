import { Controller, Post, Get } from '@nestjs/common';

import { UserService } from 'shared/user.service';

@Controller('auth')
export class AuthController {
    constructor(private userService: UserService) {
    }

    @Post('login')
    login() {
        console.log('test');
    }

}
