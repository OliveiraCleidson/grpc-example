import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './v1-user.service';

@Module({
  imports: [],
  controllers: [UserService],
  providers: [AppService],
})
export class AppModule {}
