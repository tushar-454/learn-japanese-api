import Tutorial, { ITutorial as TutorialType } from '../../models/Tutorial';

const findTutorialByProperty = async (property: string, value: string): Promise<TutorialType | null> => {
  try {
    const tutorial = await Tutorial.findOne({
      [property]: value,
    });
    return tutorial;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error(String(error));
    }
  }
};

export default findTutorialByProperty;
