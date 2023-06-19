import { Logger } from "@nestjs/common"
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import * as multerS3 from 'multer-s3';
import * as fs from 'fs';
import * as multer from "multer";
import * as path from "path";

const mkdir = (directory: string) => {
    const logger = new Logger('Mkdir');
    try {
        fs.readdirSync(path.join(process.cwd(), directory));
    } catch (e) {
        logger.log(`지정한 경로에 ${directory}가 존재하지 않아 ${directory}를 생성합니다.`)
        fs.mkdirSync(path.join(process.cwd(), directory))
    }
}

mkdir('uploads')

export const multerOptionsFactory = (): MulterOptions => {
    return {
        storage: multer.diskStorage({
            destination(req, file, callback) {
                callback(null, path.join(process.cwd(), 'uploads'))
            },
            filename(req, file, callback) {
                const ext = path.extname(file.originalname)
                const basename = path.basename(file.originalname, ext)

                callback(null, `${basename}_${Date.now()}${ext}`)
            },
        }),
        limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
    }
}

export const multerOptionsFactoryS3 = ( configService: ConfigService ): MulterOptions => {
    const s3 = new S3Client({
        region: configService.get('AWS_BUCKET_REGION'),
        credentials: {
            accessKeyId: configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: configService.get('AWS_SECRET_ACCESS_KEY')
        },
    });

    return {
        storage: multerS3({
            s3,
            bucket: `${configService.get('AWS_BUCKET_NAME')}`,
            contentType: multerS3.AUTO_CONTENT_TYPE,
            key(req, file, callback) {
                const ext = path.extname(file.originalname)
                const basename = path.basename(file.originalname, ext)

                callback(null, `uploads/${basename}_${Date.now()}${ext}`)
            },
        }),
        limits: { fileSize: 10 * 1024 * 1024 },
    }
};