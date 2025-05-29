import { Request, Response } from 'express';

const styles = [
  { id: 1, name: 'Style 1' },
  { id: 2, name: 'Style 2' },
  { id: 3, name: 'Style 3' },
];

export const getStyles = async (req: Request, res: Response) => {
  try {
    res.status(200).json(styles);
  } catch (error: any) {
    console.error('Error getting styles:', error);
    res.status(500).json({ error: 'Failed to retrieve styles' });
  }
};
