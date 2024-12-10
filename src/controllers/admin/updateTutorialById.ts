import { NextFunction, Request, Response } from 'express';
import updateTutorialByIdService from '../../services/tutorial/updateTutorialByIdService';

const updateTutorialById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { tutorialId } = req.params;
    const { title, description, video_url } = req.body;
    const tutorial = await updateTutorialByIdService(tutorialId, { title, description, video_url });
    if (!tutorial) {
      res.status(400).json({ status: 404, error: 'Tutorial not updated' });
      return;
    }
    res.status(200).json({
      status: 200,
      message: 'Tutorial updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default updateTutorialById;
