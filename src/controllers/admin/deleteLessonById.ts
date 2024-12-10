import { NextFunction, Request, Response } from 'express';
import findLessonByProperty from '../../services/lesson/findLessonByProperty';

const deleteLessonById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { lessonId } = req.params;
  try {
    const isExistingLesson = await findLessonByProperty('_id', lessonId);
    if (!isExistingLesson) {
      res.status(404).json({ status: 404, error: 'Lesson not found' });
      return;
    }
    await isExistingLesson.deleteOne();
    res.status(200).json({
      status: 200,
      message: 'Lesson deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default deleteLessonById;
