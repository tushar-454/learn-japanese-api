import Lesson from '../../models/Lesson';

type LessonData = {
  lesson_name: string;
  lesson_number: number;
  vocabulary: number;
};

const updateLessonService = async (lessonId: string, { lesson_name, lesson_number, vocabulary }: LessonData) => {
  try {
    const lesson = await Lesson.findOne({ _id: lessonId });
    if (!lesson) {
      throw new Error('Lesson not found');
    }
    lesson.lesson_name = lesson_name ?? lesson.lesson_name;
    lesson.lesson_number = lesson_number ?? lesson.lesson_number;
    lesson.vocabulary = vocabulary ?? lesson.vocabulary;
    return await lesson.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default updateLessonService;
