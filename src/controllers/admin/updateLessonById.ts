import { NextFunction, Request, Response } from 'express';
import findLessonByProperty from '../../services/lesson/findLessonByProperty';
import updateLessonService from '../../services/lesson/updateLessonService';

const updateLessonById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { lessonId } = req.params;
  const { lesson_name, lesson_number, vocabulary } = req.body;
  try {
    const isExistingLesson = await findLessonByProperty('_id', lessonId);
    if (!isExistingLesson) {
      res.status(404).json({ status: 404, error: 'Lesson not found' });
      return;
    }
    await updateLessonService(lessonId, { lesson_name, lesson_number, vocabulary });
    res.status(200).json({
      status: 200,
      message: 'Lesson updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default updateLessonById;
