import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const createTutorialSchema = z.object({
  title: z.string(),
  description: z.string(),
  video_url: z.string(),
});

const createTutorial = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = createTutorialSchema.parse(req.body);
    next();
  } catch (error) {
    const result = createTutorialSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default createTutorial;
