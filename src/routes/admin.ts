import { Router } from 'express';
import { createLesson, createVocabulary, deleteLessonById, deleteUserById, deleteVocabularyById, getAllUsers, getVocabulary, updateLessonById, updateUserById, updateVocabularyById } from '../controllers/admin';
import { getAllLessons } from '../controllers/lesson';
import { updateUserByIdValidation } from '../validation/admin';
import { createLessonValidation, updateLessonValidation } from '../validation/lesson';
import { createVocabularyValidation, updateVocabularyValidation } from '../validation/vocabulary';
const router = Router();

router.get('/users', getAllUsers);
router.put('/users/:userId', updateUserByIdValidation, updateUserById);
router.delete('/users/:userId', deleteUserById);

router.get('/lessons', getAllLessons);
router.post('/lessons', createLessonValidation, createLesson);
router.put('/lessons/:lessonId', updateLessonValidation, updateLessonById);
router.delete('/lessons/:lessonId', deleteLessonById);

router.get('/vocabulary', getVocabulary);
router.post('/vocabulary', createVocabularyValidation, createVocabulary);
router.put('/vocabulary/:vocabularyId', updateVocabularyValidation, updateVocabularyById);
router.delete('/vocabulary/:vocabularyId', deleteVocabularyById);

export default router;
