import { Router } from 'express';
import { createLesson, deleteLessonById, deleteUserById, getAllUsers, updateLessonById, updateUserById } from '../controllers/admin';
import { getAllLessons } from '../controllers/lesson';
import { updateUserByIdValidation } from '../validation/admin';
import { createLessonValidation, updateLessonValidation } from '../validation/lesson';
const router = Router();

router.get('/users', getAllUsers);
router.put('/users/:userId', updateUserByIdValidation, updateUserById);
router.delete('/users/:userId', deleteUserById);

router.get('/lessons', getAllLessons);
router.post('/lessons', createLessonValidation, createLesson);
router.put('/lessons/:lessonId', updateLessonValidation, updateLessonById);
router.delete('/lessons/:lessonId', deleteLessonById);

export default router;
