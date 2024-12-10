import Lesson, { ILesson as LessonType } from '../../models/Lesson';

const findLessonByProperty = async (property: string, value: string): Promise<LessonType | null> => {
  try {
    const lesson = await Lesson.findOne({
      [property]: value,
    });
    return lesson;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export default findLessonByProperty;
