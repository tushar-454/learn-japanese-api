import { NextFunction, Request, Response } from 'express';
import findVocabularyByProperty from '../../services/vocabulary/findVocabularyByProperty';

const deleteVocabularyById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { vocabularyId } = req.params;
  try {
    const isExistingVocabulary = await findVocabularyByProperty('_id', vocabularyId);
    if (!isExistingVocabulary) {
      res.status(404).json({ status: 404, error: 'Vocabulary not found' });
      return;
    }
    await isExistingVocabulary.deleteOne();
    res.status(200).json({
      status: 200,
      message: 'Vocabulary deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default deleteVocabularyById;
