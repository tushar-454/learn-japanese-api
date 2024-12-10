import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const createVocabularySchema = z.object({
  word: z.string(),
  pronunciation: z.string(),
  meaning: z.string(),
  when_to_say: z.string(),
  lesson_no: z.number(),
});

const createVocabulary = (req: Request, res: Response, next: NextFunction): void => {
  try {
    req.body = createVocabularySchema.parse(req.body);
    next();
  } catch (error) {
    const result = createVocabularySchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default createVocabulary;
