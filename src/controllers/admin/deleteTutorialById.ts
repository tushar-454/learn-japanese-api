import { NextFunction, Request, Response } from 'express';
import findTutorialByProperty from '../../services/tutorial/findTutorialByProperty';
const deleteTutorialById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { tutorialId } = req.params;
  try {
    const tutorial = await findTutorialByProperty('_id', tutorialId);
    if (!tutorial) {
      res.status(404).json({ status: 404, error: 'Tutorial not found' });
      return;
    }
    await tutorial.deleteOne();
    res.status(200).json({
      status: 200,
      message: 'Tutorial deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default deleteTutorialById;
