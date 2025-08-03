import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CasaModule } from './casa/casa.module';
import { DatabaseModule } from './database/database.module';
import { AuthController } from './app.auth-controller';

@Module({
  imports: [CasaModule, DatabaseModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
