import { Router } from 'express';
import { getAllLessons } from '../controllers/lesson';
const router = Router();

router.get('/', getAllLessons);

export default router;
