import { assert } from 'console';
import { Schema } from 'mongoose';
import Lesson from '../../models/Lesson';

const createLessonService = async (lesson_name: string, lesson_number: number, created_by: Schema.Types.ObjectId) => {
  try {
    const lesson = await Lesson.create({
      lesson_name,
      lesson_number,
      created_by,
    });
    return await lesson.save();
  } catch (error) {
    if (error instanceof Error) {
      assert(error instanceof Error, error.message);
    }
  }
};

export default createLessonService;
