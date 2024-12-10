import { NextFunction, Request, Response } from 'express';
import getVocabularyQueryService from '../../services/vocabulary/getVocabularyQueryService';

const getVocabulary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { lesson_no, page, limit } = req.query;

  const skip = ((page ? +page : 1) - 1) * (limit ? +limit : 10);
  const lessonNum = lesson_no ? +lesson_no : 1;
  const limitNum = limit ? +limit : 1;

  try {
    const result = await getVocabularyQueryService({ lesson_no: lessonNum, limit: limitNum, skip });
    if (!result) {
      res.status(404).json({
        status: 404,
        message: 'Vocabulary not found',
      });
      return;
    }
    const { vocabulary, totalVocabulary } = result;
    const links: { [key: string]: string } = {};
    if (page && +page > 1) {
      links['prev'] = `vocabulary?lesson_no=${lesson_no}&page=${+page - 1}&limit=${limit}`;
    }
    if (totalVocabulary > skip + limitNum) {
      links['next'] = `vocabulary?lesson_no=${lesson_no}&page=${page && +page + 1}&limit=${limit}`;
    }
    res.status(200).json({
      status: 200,
      message: 'Successfully retrieved vocabulary',
      data: vocabulary,
      links,
    });
  } catch (error) {
    next(error);
  }
};

export default getVocabulary;
