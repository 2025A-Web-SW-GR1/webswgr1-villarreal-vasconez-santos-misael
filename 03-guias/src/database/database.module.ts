import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [...databaseProviders], // que servicios uso
  exports: [...databaseProviders], // que servicios exporto
})
export class DatabaseModule {}