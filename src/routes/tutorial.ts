import { Router } from 'express';
import { getTutorial } from '../controllers/tutorial';
const router = Router();

router.get('/', getTutorial);

export default router;
