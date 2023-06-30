import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';
import { Account, AccountSchema } from "src/schemas/account.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { MulterModule } from "@nestjs/platform-express";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { multerOptionsFactoryS3 } from "src/config/multer.options";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Account.name, schema: AccountSchema }]),
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: multerOptionsFactoryS3,
      inject: [ConfigService],
    })
  ],
  controllers: [AccountController],
  providers: [AccountService]
})
export class AccountModule {}
