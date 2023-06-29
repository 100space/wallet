> # BackEnd - Nest

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
PRIVATE_KEY=
GOERLI_NETWORK=
MUMBAI_NETWORK=
```

<br />

_env 파일 사용방법_

- 다음의 세가지 방법으로 사용
  - process.env
  - configService.get(설정파일에서 가져오기)
  - configService.get(env파일에서 가져오기)

```ts
import { ConfigService } from '@nestjs/config';

export class AppService {
  constructor(private configService: ConfigService) {}
  getHello(): string {
    console.log(process.env);
    console.log(this.configService.get<string>('configuration 파일 속성'));
    console.log(this.configService.get('환경변수', { infer: true }));
    return '환경변수 예시';
  }
}
```

<br />

<br />

**Multer**

<br />

- Multer는 Module에서 장착 Controller, Service에서 처리

_module.ts_

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

_controller.ts_

```ts
import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('uploadforserver')
  @UseInterceptors(FileInterceptor('file_test'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    return this.fileService.uploadFile(file);
  }

  @Post('uploadforS3')
  @UseInterceptors(FileInterceptor('file'))
  uploadFileforS3(@UploadedFile() file: Express.MulterS3.File) {
    console.log(file);
    return this.fileService.uploadFileForS3(file);
  }
}
```

_service.ts_

```ts
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class FileService {
  uploadFile(file: Express.Multer.File) {
    console.log(file);
    if (!file) throw new BadRequestException('파일이 존재하지 않습니다.');

    return { filePath: file.path };
  }

  uploadFileForS3(file: Express.MulterS3.File) {
    console.log(file);
    if (!file) throw new BadRequestException('파일이 존재하지 않습니다.');

    return { filePath: file.location };
  }
}
```

# socket.io 설치

```json
"dependencies": {
 "@nestjs/common": "^10.0.0",
 "@nestjs/core": "^10.0.0",
 "@nestjs/platform-express": "^10.0.0",
},
 "devDependencies": {
"@nestjs/testing": "^10.0.0",
 }
```

```bash
npm install
```

```bash
npm i --save @nestjs/websockets @nestjs/platform-socket.io
```

# http 파일 사용방법

[참고](https://hudi.blog/vscode-rest-client/)

vscode extention `REST Client` 설치

## 구분

- `#`을 3개 이상 사용해서 request 구분 가능

```
### 구분
```

## GET 요청

```
GET [요청할 URL]?name=hello&value=world HTTP/1.1
```

## POST 요청

- 요청 헤더와 요청 바디는 반드시 한 줄의 간격을 두고 작성해야한다.

```
POST [요청할 URL] HTTP/1.1
Content-Type: application/json; charset=UTF-8
Authorization: bearer abcdef...

{
  "name": "hello"
  "value:" "world"
}
```

## Variable

```
@var = value
```

## USE ENV

```
{{$dotenv ENV_KEY_NAME}}
```

```
# .env
NAME=hello

# use
{{$dotenv NAME}}
```
