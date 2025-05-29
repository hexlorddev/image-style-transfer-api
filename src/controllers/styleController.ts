import { Request, Response } from 'express';
import { applyStyleTransfer } from '../utils/styleTransferUtils';
import { successResponse } from '../utils/response';

export const applyStyle = async (req: Request, res: Response) => {
  try {
    const { image, style } = req.body;

    if (!image || !style) {
      return res.status(400).json({ error: 'Image and style are required' });
    }

    const stylizedImage = await applyStyleTransfer(image, style);

    successResponse(res, { stylizedImage }, 'Style applied successfully');
  } catch (error) {
    console.error('Error applying style:', error);
    res.status(500).json({ error: 'Failed to apply style' });
  }
};
