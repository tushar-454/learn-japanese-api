import Vocabulary from '../../models/Vocabulary';

type VocabularyType = {
  word: string;
  pronunciation: string;
  meaning: string;
  when_to_say: string;
  lesson_no: number;
};

const updateVocabularyByIdSerivce = async (id: string, data: VocabularyType) => {
  try {
    const vocabulary = await Vocabulary.findById({ _id: id });
    if (!vocabulary) {
      throw new Error('Vocabulary not found');
    }
    vocabulary.word = data.word ?? vocabulary.word;
    vocabulary.pronunciation = data.pronunciation ?? vocabulary.pronunciation;
    vocabulary.meaning = data.meaning ?? vocabulary.meaning;
    vocabulary.when_to_say = data.when_to_say ?? vocabulary.when_to_say;
    vocabulary.lesson_no = data.lesson_no ?? vocabulary.lesson_no;
    vocabulary.updatedAt = new Date();
    return await vocabulary.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default updateVocabularyByIdSerivce;
