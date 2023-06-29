import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health/health.controller';
import { TrendsModule } from './trends/trends.module';
import { TransactionModule } from './transaction/transaction.module';
import { TokenModule } from './token/token.module';
import { MnemonicModule } from './mnemonic/mnemonic.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`,
    ),
    TrendsModule,
    TransactionModule,
    TokenModule,
    MnemonicModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
