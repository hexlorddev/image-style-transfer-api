import { Request, Response } from 'express';
import { getAvailableStyles } from '../utils/styleTransferUtils';
import { successResponse } from '../utils/response';

export const getStyles = async (req: Request, res: Response) => {
  try {
    const styles = getAvailableStyles();
    successResponse(res, { styles }, 'Styles retrieved successfully');
  } catch (error) {
    console.error('Error retrieving styles:', error);
    res.status(500).json({ error: 'Failed to retrieve styles' });
  }
};
