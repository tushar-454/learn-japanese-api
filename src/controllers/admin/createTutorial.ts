import { NextFunction, Request, Response } from 'express';
import createTutorialService from '../../services/tutorial/createTutorialService';

const createTutorial = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { title, description, video_url } = req.body;
  try {
    const tutorial = await createTutorialService({ title, description, video_url });
    if (!tutorial) {
      res.status(400).json({ status: 404, error: 'Tutorial not created' });
      return;
    }
    res.status(201).json({
      status: 201,
      message: 'Tutorial created successfully',
      data: tutorial,
    });
  } catch (error) {
    next(error);
  }
};

export default createTutorial;
