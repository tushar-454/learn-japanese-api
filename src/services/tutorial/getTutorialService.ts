import Tutorial from '../../models/Tutorial';

const getTutorialService = async () => {
  try {
    const tutorials = await Tutorial.find();
    return tutorials;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default getTutorialService;
