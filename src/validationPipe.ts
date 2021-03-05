import { ValidationPipe } from '@nestjs/common';

export const MyValidationPipe = new ValidationPipe({
  skipMissingProperties: true,
});
