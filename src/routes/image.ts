import express, { Request, Response } from 'express';
import { validateImage } from '../middlewares/validationMiddleware';
import { uploadImage } from '../controllers/imageController';

const router = express.Router();

router.post('/upload', validateImage, uploadImage);

export default router;
