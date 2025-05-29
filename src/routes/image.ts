import express, { Request, Response } from 'express';
import { handleStyleTransfer } from '../controllers/imageController';
import { validateImage, validateStyle } from '../middlewares/validationMiddleware';
import { globalErrorHandler } from '../middleware/errors';

const router = express.Router();

router.post(
  '/style-transfer',
  validateImage,
  validateStyle,
  async (req: Request, res: Response) => {
    try {
      const { image, style } = req.body; // Assuming image is a base64 string or similar
      const stylizedImage = await handleStyleTransfer(image, style);

      if (!stylizedImage) {
        return res.status(500).send({ message: 'Failed to apply style transfer.' });
      }

      // Convert the stylized image to a Buffer if it's not already
      const imageBuffer = Buffer.isBuffer(stylizedImage) ? stylizedImage : Buffer.from(stylizedImage, 'base64');

      res.status(201).attachment('stylized-image.jpg').type('image/jpeg').send(imageBuffer);
    } catch (error: any) {
      globalErrorHandler(error, req, res, () => {
        // Fallback in case globalErrorHandler doesn't handle the error
        console.error("Error during style transfer:", error);
        res.status(500).send({ message: 'Internal server error' });
      });
    }
  }
);

export default router;
