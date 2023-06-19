import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose'
import configuration from "./config/configuration";

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [configuration]
  }), MongooseModule.forRoot(`mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}