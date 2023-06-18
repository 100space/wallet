import { S3Client } from "@aws-sdk/client-s3";
import { ConfigService } from "@nestjs/config";
import { MulterOptions } from "@nestjs/platform-express/multer/interfaces/multer-options.interface";
import * as multerS3 from 'multer-s3';
import * as path from 'path';

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

