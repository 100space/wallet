> # Mongoose Of Nest

<br />

# 1. 스키마 정의

<br />

```ts
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
	@Prop({ required: true, unique: true })
	address: string;

	@Prop()
	imgUrl: string;

	@Prop()
	nickname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
```

<br />

-   `@Schema`는 정의된 클래스를 스키마 정의로 표시하는 데코레이터이다.
-   User라는 클래스는 MongoDB 컬렉션(Collection)에 맵핑되지만, 실제로 Mongo에 들어가는 컬렉션 이름은 s가 붙은 users가 된다.

<br />

## 관계정의

<br />

```ts
import * as mongoose from "mongoose";
import { User } from "./user.schema";

// Schema Class 내부에
@Props({ type: mongoose.Schema.Types.ObjectId, ref: "User" })
user: User;
```

<br />

-   다른 모델과의 관계를 정의하는 경우에 위와 같은 type과 ref에 명시해주어야한다.

## 중첩 객체를 나타내는 경우

<br />

```ts
@Props(raw({
    userid: { type: String },
    userpw: { type: String }
}))
userinfo: Record<string, any>
```

<br />

## 데코레이터를 사용하지 않고 기존의 Mongoose 처럼 사용하는 경우

<br />

```ts
export const UserSchema = new mongoose.Schema({
	address: String,
	imgUrl: String,
	nickname: String,
});
```

<br />

## 2. Nest에 MongoDB 모델 주입하는 방법

<br />

```ts
@Module({
	imports: [
		MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
	],
	controllers: [BoardController],
	providers: [BoardService],
})
export class BoardModule {}
```

-   imports 옵션안에 가져올(사용할) 모델(테이블의 개념)을 설정해주면 된다.

<br />

## 3. MongoDB에 조회, 생성, 수정, 삭제 요청하는 방법

<br />

```ts
@Injectable()
export class BoardService {
	constructor(@InjectModel(Board.name) private boardModel: Model<Board>) {}

	// 생성 메서드 모델(데이터).save()
	async create(createBoardDto: CreateBoardDto) {
		const createdBoard = new this.boardModel(createBoardDto);
		return createdBoard.save();
	}
    // 조회 메서드 모델.find().exec()
	async findAll(): Promise<Board[]> {
		return this.boardModel.find().exec();
	}

    // 단일 조회 메서드 모델.findOne({ 조건 })
	findOne(id: number) {
		return this.boardModel.findOne({ boardid: id });
	}

    // 수정 메서드 모델.updateOne({ 조건 }, { 수정 데이터 })
	async update(id: number, updateBoardDto: UpdateBoardDto) {
		return await this.boardModel.updateOne({ boardid: id }, updateBoardDto);
	}

    // 삭제 메서드 모델.deleteOne({ 조건 })
	remove(id: number) {
		return this.boardModel.deleteOne({ boardid: id });
	}
}
```

이 외에도 공식문서에 다양한 메서드가 있다.
(https://mongoosejs.com/docs/api/model.html)


## ※. DTO 디렉토리

<br />

- 여기서의 DTO 파일은 데이터 베이스에 create, update를 실행시킬 경우에 넣는 데이터의 형태를 정의하는 곳이다.