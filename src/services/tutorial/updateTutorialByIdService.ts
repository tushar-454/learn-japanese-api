import Tutorial from '../../models/Tutorial';

type TutorialType = {
  title: string;
  description: string;
  video_url: string;
};

const updateTutorialByIdService = async (tutorialId: string, tutorialData: TutorialType) => {
  const { title, description, video_url } = tutorialData;
  try {
    const tutorial = await Tutorial.findById({ _id: tutorialId });
    if (!tutorial) {
      throw new Error('Tutorial not found');
    }
    tutorial.title = title ?? tutorial.title;
    tutorial.description = description ?? tutorial.description;
    tutorial.video_url = video_url ?? tutorial.video_url;
    tutorial.updatedAt = new Date();
    return await tutorial.save();
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
  }
};

export default updateTutorialByIdService;
