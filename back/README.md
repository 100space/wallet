># BackEnd - Nest

<br />

## 사용방법

```sh
# 패키지 설치
$ npm install

# 서버 시작
$ npm run start

# 개발모드 서버 시작
$ npm run start:dev
```

<br />

## 기본설정

<br />

**env 파일**

<br />

```env
MODE=developement | production
PROTOCOL=
HOST=
PORT=
DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=
AWS_BUCKET_REGION=
AWS_BUCKET_NAME=
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
```

<br />

*env 파일 사용방법*

- 다음의 세가지 방법으로 사용
  - process.env
  - configService.get(설정파일에서 가져오기)
  - configService.get(env파일에서 가져오기)

```ts
import { ConfigService } from '@nestjs/config';

export class AppService {
  constructor(private configService: ConfigService){}
  getHello(): string {
    console.log(process.env)
    console.log(this.configService.get<string>('configuration 파일 속성'))
    console.log(this.configService.get('환경변수', { infer: true }))
    return '환경변수 예시';
  }
}
```

<br />

<br />

**Multer**

<br />

- Multer는 Module에서 장착 Controller, Service에서 처리

*module.ts*
```ts
import { MulterModule } from "@nestjs/platform-express";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { multerOptionsFactory, multerOptionsFactoryS3 } from "src/config/multer.options.ts";

@Module({
  imports: [
    MulterModule.registerAsync({
      imports: [ConfigModule],
      useFactory: multerOptionsFactory,
      inject: [ConfigService],
    }),
  ],
})
```

*controller.ts*
```ts
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from "@nestjs/platform-express";
import { FileService } from "./file.service";

@Controller('file')
export class FileController {
    constructor(private readonly fileService: FileService){}

    @Post('uploadforserver')
    @UseInterceptors(FileInterceptor('file_test'))
    uploadFile(@UploadedFile() file: Express.Multer.File){
        console.log(file)
        return this.fileService.uploadFile(file);
    }

    @Post('uploadforS3')
    @UseInterceptors(FileInterceptor('file'))
    uploadFileforS3(@UploadedFile() file: Express.MulterS3.File){
        console.log(file)
        return this.fileService.uploadFileForS3(file);
    }
}
```

*service.ts*
```ts
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
    uploadFile(file: Express.Multer.File) {
        console.log(file)
        if(!file) throw new BadRequestException('파일이 존재하지 않습니다.')
        
        return { filePath: file.path }
    }

    uploadFileForS3(file: Express.MulterS3.File) {
        console.log(file)
        if(!file) throw new BadRequestException('파일이 존재하지 않습니다.')
        
        return { filePath: file.location }
    }
}

```