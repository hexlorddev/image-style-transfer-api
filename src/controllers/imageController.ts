import { Request, Response } from 'express';
import { applyStyleTransfer } from '../utils/styleTransferUtils';
import { successResponse } from '../utils/response';

export const uploadImage = async (req: Request, res: Response) => {
  try {
    // Assuming the image is already validated by the middleware
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: 'No image uploaded' });
    }

    // Apply style transfer (replace with actual image processing logic)
    const imageId = await applyStyleTransfer(image.path, 'some-style'); // Replace 'some-style' with actual style

    successResponse(res, { imageId }, 'Image uploaded successfully');
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
};
