import { Request, Response, NextFunction } from 'express';

const SUPPORTED_STYLES = ['style1', 'style2', 'style3']; // Example styles

export const validateImage = (req: Request, res: Response, next: NextFunction) => {
  const { image } = req.body;

  if (!image) {
    return res.status(400).send({ message: 'Image is required.' });
  }

  // Basic check if the image is a string (e.g., base64)
  if (typeof image !== 'string') {
    return res.status(400).send({ message: 'Invalid image format. Image must be a string.' });
  }

  // Add more robust image validation here if needed (e.g., using a library to check image headers)

  next();
};

export const validateStyle = (req: Request, res: Response, next: NextFunction) => {
  const { style } = req.body;

  if (!style) {
    return res.status(400).send({ message: 'Style is required.' });
  }

  if (!SUPPORTED_STYLES.includes(style)) {
    return res.status(400).send({ message: `Unsupported style. Supported styles are: ${SUPPORTED_STYLES.join(', ')}` });
  }

  next();
};
