import { Schema } from 'mongoose';
import Vocabulary from '../../models/Vocabulary';

type VocabularyType = {
  word: string;
  pronunciation: string;
  meaning: string;
  when_to_say: string;
  lesson_no: string;
  created_by: Schema.Types.ObjectId;
};

const createVocabularyService = async (vocabulary: VocabularyType) => {
  const { word, pronunciation, meaning, when_to_say, lesson_no, created_by } = vocabulary;
  try {
    const newVocabulary = await Vocabulary.create({
      word,
      pronunciation,
      meaning,
      when_to_say,
      lesson_no,
      created_by,
    });
    return await newVocabulary.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default createVocabularyService;
