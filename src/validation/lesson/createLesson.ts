import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const createLessonSchema = z.object({
  lesson_name: z.string(),
  lesson_number: z.number(),
});

const createLesson = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = createLessonSchema.parse(req.body);
    next();
  } catch (error) {
    const result = createLessonSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default createLesson;
