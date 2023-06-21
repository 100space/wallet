import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import { HealthController } from './health/health.controller';
import configuration from "./config/configuration";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}