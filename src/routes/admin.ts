import { Router } from 'express';
import { createLesson, createTutorial, createVocabulary, deleteLessonById, deleteTutorialById, deleteUserById, deleteVocabularyById, getAllUsers, getVocabulary, updateLessonById, updateTutorialById, updateUserById, updateVocabularyById } from '../controllers/admin';
import { getAllLessons } from '../controllers/lesson';
import { updateUserByIdValidation } from '../validation/admin';
import { createLessonValidation, updateLessonValidation } from '../validation/lesson';
import { createTutorialValidation, updateTutorialValidation } from '../validation/tutorial';
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

router.post('/tutorials', createTutorialValidation, createTutorial);
router.put('/tutorials/:tutorialId', updateTutorialValidation, updateTutorialById);
router.delete('/tutorials/:tutorialId', deleteTutorialById);

export default router;
