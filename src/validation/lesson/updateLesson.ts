import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const updateLessonSchema = z.object({
  lesson_name: z.string().optional(),
  lesson_number: z.number().optional(),
  vocabulary: z.number().optional(),
});

const updateLesson = (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = updateLessonSchema.parse(req.body);
    next();
  } catch (error) {
    const result = updateLessonSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default updateLesson;
