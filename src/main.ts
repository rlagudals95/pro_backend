import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';

async function bootstrap() {
  dynamoose.aws.sdk.config.update({
    accessKeyId: 'AKIAYEBJVE4242W7VYMC',
    secretAccessKey: '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',
    region: 'ap-northeast-2',
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
