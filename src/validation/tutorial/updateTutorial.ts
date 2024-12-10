import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

const updateTutorialSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  video_url: z.string().optional(),
});

const updateTutorial = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = updateTutorialSchema.parse(req.body);
    next();
  } catch (error) {
    const result = updateTutorialSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export default updateTutorial;
