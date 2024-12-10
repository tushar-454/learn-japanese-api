import { NextFunction, Request, Response } from 'express';
import getVocabularyService from '../../services/vocabulary/getVocabularyService';

const getVocabulary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const vocabulary = await getVocabularyService();
    res.status(200).json({
      status: 200,
      message: 'Successfully retrieved admin vocabulary',
      data: vocabulary,
    });
  } catch (error) {
    next(error);
  }
};

export default getVocabulary;
