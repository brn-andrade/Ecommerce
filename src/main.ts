import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT, () => {
        console.log(`server listen on port: ${process.env.PORT}`);
    });
}
bootstrap();
