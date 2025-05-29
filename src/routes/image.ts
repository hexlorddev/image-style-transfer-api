import { Router, Request, Response } from 'express';
import { uploadImage } from '../controllers/imageController';
import { upload } from '../middlewares/validationMiddleware';

const router = Router();

router.post('/', upload.single('image'), uploadImage);

export default router;
