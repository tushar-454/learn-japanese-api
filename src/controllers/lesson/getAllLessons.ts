import { NextFunction, Request, Response } from 'express';
import getAllLessonsService from '../../services/lesson/getAllLessonsService';

const getAllLessons = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const lessons = await getAllLessonsService();
    res.status(200).json({
      status: 200,
      message: 'Lessons retrieved successfully',
      data: lessons,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllLessons;
