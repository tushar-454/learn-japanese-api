import Vocabulary, { IVocabulary as VocabularyType } from '../../models/Vocabulary';

const findVocabularyByProperty = async (property: string, value: string): Promise<VocabularyType | null> => {
  try {
    const vocabulary = await Vocabulary.findOne({
      [property]: value,
    });
    return vocabulary;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export default findVocabularyByProperty;
