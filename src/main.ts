import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TestAdapter } from './test.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: false,
    origin: '*',
  });

  app.useWebSocketAdapter(new TestAdapter());

  await app.listen(3000);
}
bootstrap();
