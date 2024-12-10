import { NextFunction, Request, Response } from 'express';
import updateVocabularyByIdSerivce from '../../services/vocabulary/updateVocabularyByIdSerivce';
const updateVocabularyById = async (req: Request, res: Response, next: NextFunction) => {
  const { vocabularyId } = req.params;
  const { word, pronunciation, meaning, when_to_say, lesson_no } = req.body;
  try {
    await updateVocabularyByIdSerivce(vocabularyId, {
      word,
      pronunciation,
      meaning,
      when_to_say,
      lesson_no,
    });

    res.status(200).json({
      status: 200,
      message: 'Successfully updated vocabulary',
    });
  } catch (error) {
    next(error);
  }
};

export default updateVocabularyById;
