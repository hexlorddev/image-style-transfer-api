import express, { Request, Response } from 'express';
import { validateStyle } from '../middlewares/validationMiddleware';
import { applyStyle } from '../controllers/styleController';

const router = express.Router();

router.post('/apply', validateStyle, applyStyle);

export default router;
