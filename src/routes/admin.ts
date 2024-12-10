import { Router } from 'express';
import { deleteUserById, getAllUsers, updateUserById } from '../controllers/admin';
import { updateUserByIdValidation } from '../validation/admin';
const router = Router();

router.get('/users', getAllUsers);
router.put('/users/:userId', updateUserByIdValidation, updateUserById);
router.delete('/users/:userId', deleteUserById);

export default router;
