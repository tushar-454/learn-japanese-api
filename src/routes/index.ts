import { Router } from 'express';
import validateAdmin from '../middlewares/validateAdmin';
import validateToken from '../middlewares/validateToken';
import adminRoutes from './admin';
import authRoutes from './auth';
import userRoutes from './user';
const router = Router();

router.use('/api/v1/auth', authRoutes);
router.use('/api/v1/users', validateToken, userRoutes);
router.use('/api/v1/admin', validateToken, validateAdmin, adminRoutes);

export default router;
