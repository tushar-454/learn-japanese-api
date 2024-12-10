import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import formatZodErrors from '../../utils/formatZodError';

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  password: z.string().min(6).optional(),
  photo: z.string().url().optional(),
});

const updateUserById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    req.body = updateUserSchema.parse(req.body);
    next();
  } catch (error) {
    const result = updateUserSchema.safeParse(req.body);
    res.status(400).json({
      status: 400,
      errors: result.error ? formatZodErrors(result.error) : [],
    });
  }
};

export type updateUserInput = z.infer<typeof updateUserSchema>;
export default updateUserById;
