import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  console.info(process.env.AWS_SECRET_KEY);
  dynamoose.aws.sdk.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    region: process.env.AWS_REGION,
  });
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(5001);
}
bootstrap();
