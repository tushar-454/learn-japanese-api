import { NextFunction, Request, Response } from 'express';

import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const getVocabularyQuerySchema = z.object({
  lesson_no: z.string(),
  page: z.string(),
  limit: z.string(),
});

const getVocabularyQuery = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = getVocabularyQuerySchema.parse(req.query);
    next();
  } catch (error) {
    const result = getVocabularyQuerySchema.safeParse(req.query);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default getVocabularyQuery;
