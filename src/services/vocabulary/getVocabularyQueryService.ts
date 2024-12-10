import Vocabulary from '../../models/Vocabulary';

type VocabularyType = {
  lesson_no: number;
  limit: number;
  skip: number;
};

const getVocabularyQueryService = async (data: VocabularyType) => {
  const { lesson_no, limit, skip } = data;
  try {
    const vocabulary = await Vocabulary.find({ lesson_no }).skip(skip).limit(limit);
    const totalVocabulary = await Vocabulary.countDocuments({ lesson_no });
    return {
      vocabulary,
      totalVocabulary,
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getVocabularyQueryService;
