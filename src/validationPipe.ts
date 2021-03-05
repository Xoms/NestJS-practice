import { ValidationPipe } from '@nestjs/common';

export const MyValidationPipe = new ValidationPipe({
  skipMissingProperties: true,
  forbidUnknownValues: true,
  whitelist: true,
  forbidNonWhitelisted: true,
});
