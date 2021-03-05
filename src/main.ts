import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { MyValidationPipe } from './validationPipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(MyValidationPipe);

  const options = new DocumentBuilder()
    .setTitle('TaNa platform API')
    .setDescription('TaNa platform API')
    .addTag('news')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'Bearer' },
      'access-token',
    )
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
