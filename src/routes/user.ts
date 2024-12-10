import { Router } from 'express';
import { deleteUserById, getUserById, updateUserById } from '../controllers/user';
import { updateUserByIdValidation } from '../validation/user';

const router = Router();

router.get('/:userId', getUserById);
router.put('/:userId', updateUserByIdValidation, updateUserById);
router.delete('/:userId', deleteUserById);

export default router;
