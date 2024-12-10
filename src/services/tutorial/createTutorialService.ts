import Tutorial from '../../models/Tutorial';

type TutorialType = {
  title: string;
  description: string;
  video_url: string;
};

const createTutorialService = async (data: TutorialType) => {
  const { title, description, video_url } = data;
  try {
    const tutorial = await Tutorial.create({
      title,
      description,
      video_url,
    });
    return await tutorial.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default createTutorialService;
