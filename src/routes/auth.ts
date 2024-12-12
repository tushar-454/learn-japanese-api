import { Router } from 'express';
import { createUser, getUserData, loginUser, logoutUser } from '../controllers/auth';
import validateToken from '../middlewares/validateToken';
import { createUserValidation, loginUserValidation } from '../validation/auth';
const router = Router();

router.post('/register', createUserValidation, createUser);
router.post('/login', loginUserValidation, loginUser);
router.post('/logout', validateToken, logoutUser);
router.get('/token', validateToken, getUserData);

export default router;
