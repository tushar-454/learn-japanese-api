import { NextFunction, Request, Response } from 'express';
import getTutorialService from '../../services/tutorial/getTutorialService';

const getTutorial = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const tutorials = await getTutorialService();
    res.status(200).json({
      success: 200,
      message: 'Successfully retrieved tutorials',
      data: tutorials,
    });
  } catch (error) {
    next(error);
  }
};

export default getTutorial;
