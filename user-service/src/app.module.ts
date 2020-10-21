import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [UserModule, TypeOrmModule.forRoot(TypeOrmConfig)],
  controllers: [],
  providers: [],
})
export class AppModule {}
