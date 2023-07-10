import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthController } from './health/health.controller';
import { TrendsModule } from './trends/trends.module';
import { TransactionModule } from './transaction/transaction.module';
import { TokenModule } from './token/token.module';
import { AccountModule } from './account/account.module';
import { NetworkModule } from './network/network.module';
import { MarketModule } from './market/market.module';
import { ScheduleModule } from '@nestjs/schedule';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`,
      { connectionName: 'local' },
    ),
    MongooseModule.forRoot(process.env.DB_URI, { connectionName: 'market' }),
    ScheduleModule.forRoot(),
    TrendsModule,
    TransactionModule,
    TokenModule,
    AccountModule,
    NetworkModule,
    MarketModule,
  ],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
