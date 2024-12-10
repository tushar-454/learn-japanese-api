import { Router } from 'express';
import { getVocabulary } from '../controllers/vocabulary';
import { getVocabularyQueryValidation } from '../validation/vocabulary';

const router = Router();

router.get('/', getVocabularyQueryValidation, getVocabulary);

export default router;
