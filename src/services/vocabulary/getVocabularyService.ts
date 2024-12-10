import Vocabulary from '../../models/Vocabulary';

const getVocabularyService = async () => {
  try {
    const vocabulary = await Vocabulary.find();
    return vocabulary;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getVocabularyService;
