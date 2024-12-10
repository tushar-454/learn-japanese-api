import { Router } from 'express';
import { createUser } from '../controllers/auth';
import { createUserValidation } from '../validation/auth';
const router = Router();

router.post('/register', createUserValidation, createUser);

export default router;
