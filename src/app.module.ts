import { Module } from '@nestjs/common';
import { NewsModule } from './modules/news/news.module';
import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, NewsModule, UserModule],
})
export class AppModule {}
