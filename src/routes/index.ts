import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import authRoutes from './auth';
import userRoutes from './user';
const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', validateToken, userRoutes);

export default router;
