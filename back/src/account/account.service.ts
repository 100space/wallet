import { BadRequestException, HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAccountDto, ICreateAccountDto } from './dto/create-account.dto';
import * as bip39 from "bip39";
import { ethers } from "ethers";
import { Mnemonic } from "src/interface/mnemonic.interface";
import { PostMnemonicDTO } from "./dto/post-mnemonic.dto";
import { Account } from "src/schemas/account.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) { }

  async findOrCreateAccount({ address, nickname }: ICreateAccountDto): Promise<CreateAccountDto> {
    try {
      if (address.length !== 42) throw new BadRequestException('Address is not valid', { cause: new Error(), description: "Address is not valid" })
      if (typeof nickname !== "string") throw new BadRequestException('Nickname is not valid', { cause: new Error(), description: "Nickname is not valid" })

      const isAddress = await this.accountModel.findOne({ address })

      if (isAddress !== null) await this.accountModel.updateOne({ address }, { address, nickname })
      else await this.accountModel.create({ address, nickname })
      
      return { success: true };
    } catch (error) {
      throw error
    }
  }

  async findOne({ address }) {
    try {
      const result = await this.accountModel.findOne({ address })
      return { result }
    } catch (error) {
      throw error
    }
  }

  async update({ address, nickname, image }) {
    try {
      const result = await this.accountModel.updateOne({ address },{ address, nickname, image })
      return { result }
    } catch (error) {
      throw error
    }
  }

  async uploadProfileImg(file: Express.MulterS3.File, address) {
    try {
      if (!file) throw new BadRequestException('파일이 존재하지 않습니다.', { cause: new Error(), description: "Nickname is not valid" });
      const { result } = await this.findOne({ address })
      if( result === null ) throw new NotFoundException('Address is not found', {cause: new Error(), description: "Address is not found"})
      const createResult = await this.update({ address: result.address, nickname: result.nickname, image: file.location })
      if(!createResult.result.acknowledged) throw new Error('업데이트에 실패했습니다.')
      return { image: file.location }
    } catch (error) {
      throw error
    }
  }

  createMnemonic(): { mnemonic: Mnemonic } {
    const mnemonicWord = ethers.Wallet.createRandom().mnemonic.phrase;
    const mnemonic = mnemonicWord.split(' ')

    return { mnemonic }
  }

  createAccount(mnemonic: Mnemonic): PostMnemonicDTO {
    try {
      if (mnemonic.length !== 12) throw new Error('니모닉 단어의 갯수가 올바르지 않습니다.')
  
      const mnemonicWord = mnemonic.join(' ')
      if (!bip39.validateMnemonic(mnemonicWord)) throw new Error('니모닉 단어가 올바르지 않습니다.')
  
      const { privateKey, publicKey, address } = ethers.Wallet.fromPhrase(mnemonicWord)
      if (!ethers.isAddress(address)) throw new Error('주소가 올바르지 않습니다.')
  
      return { privateKey, publicKey, address }
    } catch (error) {
      throw error
    }
  }
}
