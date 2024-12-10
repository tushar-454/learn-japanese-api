import { NextFunction, Request, Response } from 'express';
import createLessonService from '../../services/lesson/createLessonService';
import findLessonByProperty from '../../services/lesson/findLessonByProperty';
import getAllLessonsService from '../../services/lesson/getAllLessonsService';
import findUserByProperty from '../../services/user/findUserByProperty';

const createLesson = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //@ts-ignore
  const { email } = req.user;
  const { lesson_name, lesson_number } = req.body;
  try {
    const admin = await findUserByProperty('email', email);
    if (!admin) {
      res.status(404).json({
        status: 404,
        error: 'Admin not found',
      });
      return;
    }

    const isExistingLesson = await findLessonByProperty('lesson_number', lesson_number);
    const lessons = await getAllLessonsService();
    const lastLesson = lessons && lessons[lessons.length - 1];

    if (isExistingLesson) {
      res.status(409).json({
        status: 409,
        error: `Lesson already exists last lesson number is ${lastLesson && lastLesson.lesson_number}`,
      });
      return;
    }

    const createdLesson = await createLessonService(lesson_name, lesson_number, admin._id);
    if (!createdLesson) {
      res.status(400).json({
        status: 400,
        error: 'Lesson not created',
      });
      return;
    }
    res.status(201).json({
      status: 201,
      message: 'Lesson created',
      lesson: createdLesson,
    });
  } catch (error) {
    next(error);
  }
};

export default createLesson;
