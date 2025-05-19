import express from 'express';
import { processVoiceInput } from '../controllers/iaController.js';

const router = express.Router();
router.post('/voice', processVoiceInput);

export default router;
