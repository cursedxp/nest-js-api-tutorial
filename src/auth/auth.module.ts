import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  //Modules are used by Nest to organize the application structure into scopes.
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
