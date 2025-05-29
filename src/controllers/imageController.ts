import { applyStyleTransfer } from '../utils/styleTransferUtils';

export const handleStyleTransfer = async (image: string, style: string): Promise<Buffer | null> => {
  try {
    const stylizedImage = await applyStyleTransfer(image, style);
    return stylizedImage;
  } catch (error: any) {
    console.error("Error in handleStyleTransfer:", error);
    return null;
  }
};
