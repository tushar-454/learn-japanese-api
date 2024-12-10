import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const updateVocabularyByIdSchema = z.object({
  word: z.string().optional(),
  pronunciation: z.string().optional(),
  meaning: z.string().optional(),
  when_to_say: z.string().optional(),
  lesson_no: z.number().optional(),
});

const updateVocabularyById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = updateVocabularyByIdSchema.parse(req.body);
    next();
  } catch (error) {
    const result = updateVocabularyByIdSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default updateVocabularyById;
