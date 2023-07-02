import { CreateAccountDto, CreateAccountResponseDto, UploadProfileImgDto, CreateWalletDto, ValidateAccountDto, FindAccountDto, UpdateAccountDto } from "./dto";
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import * as bip39 from "bip39";
import { ethers } from "ethers";
import { Account } from "src/schemas/account.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";


@Injectable()
export class AccountService {
  constructor(@InjectModel(Account.name) private accountModel: Model<Account>) { }

  async createAccount({ address, nickname }: CreateAccountDto): Promise<CreateAccountResponseDto> {
    try {

      if (!this.validation({ address })) throw new BadRequestException('Address is not valid', { cause: new Error(), description: "Address is not valid" })

      const isAddress = await this.accountModel.findOne({ address })
      if (isAddress !== null) await this.accountModel.updateOne({ address }, { address, nickname })
      else await this.accountModel.create({ address, nickname })

      return { success: true };
    } catch (error) {
      throw error
    }
  }

  async uploadProfileImg({ file, address }: UploadProfileImgDto) {
    try {
      if (!file) throw new BadRequestException('파일이 존재하지 않습니다.', { cause: new Error(), description: "Nickname is not valid" });

      const isAddress = await this.findOne({ address })
      if (isAddress === null) throw new NotFoundException('Address is not found', { cause: new Error(), description: "Address is not found" })

      const result = await this.update({ address: isAddress.address, nickname: isAddress.nickname, image: file.location })
      if (!result.acknowledged) throw new BadRequestException('Failed to update Address', { cause: new Error(), description: "Address is not found" })

      return { image: file.location }
    } catch (error) {
      throw error
    }
  }

  createMnemonic() {
    const mnemonicWord = ethers.Wallet.createRandom().mnemonic.phrase;
    const mnemonic = mnemonicWord.split(' ')
    return { mnemonic }
  }

  createWallet() {
    const { privateKey, publicKey, address } = ethers.Wallet.createRandom()
    return { privateKey, publicKey, address }
  }

  createWalletByMnemonic({ mnemonic }: CreateWalletDto) {
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

  async validation({ address }: ValidateAccountDto): Promise<boolean> {
    try {
      if (address.length !== 42) return false
      else return true
    } catch (error) {
      throw error
    }
  }

  async findOne({ address }: FindAccountDto) {
    try {
      return await this.accountModel.findOne({ address })
    } catch (error) {
      throw error
    }
  }

  async create(createAccountDto: CreateAccountDto) {
    try {
      return await this.accountModel.create(createAccountDto)
    } catch (error) {

    }
  }

  async update(updateAccountDto: UpdateAccountDto) {
    try {
      return await this.accountModel.updateOne({ address: updateAccountDto.address }, updateAccountDto)
    } catch (error) {
      throw error
    }
  }
}
