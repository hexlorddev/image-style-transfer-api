import express, { Request, Response } from 'express';
import { getStyles } from '../controllers/stylesController';

const router = express.Router();

router.get('/list', getStyles);

export default router;
