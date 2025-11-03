import express from 'express';
import controller from '../controllers/producto.js';

const router = express.Router();

router.get('/', controller.findAll);

export default router;