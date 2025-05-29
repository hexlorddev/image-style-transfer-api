import { Request, Response } from 'express';
import { HttpError } from '../utils/errors/HttpError';
import { uploadImageToStorage } from '../utils/imageUtils';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      throw new HttpError(400, 'No image file provided');
    }

    const imageUrl = await uploadImageToStorage(req.file);
    res.status(201).json({ message: 'Image uploaded successfully', imageUrl: imageUrl });
  } catch (error: any) {
    console.error('Error uploading image:', error);
    res.status(error.status || 500).json({ error: error.message || 'Failed to upload image' });
  }
};
