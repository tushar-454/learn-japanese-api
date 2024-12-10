import Lesson from '../../models/Lesson';

const getAllLessonsService = async () => {
  try {
    const lessons = await Lesson.find().sort({ lesson_number: 1 });
    return lessons;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getAllLessonsService;
