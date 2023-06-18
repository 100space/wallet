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