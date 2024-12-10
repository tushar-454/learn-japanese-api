import { NextFunction, Request, Response } from 'express';
import findUserByProperty from '../../services/user/findUserByProperty';

const deleteUserById = async (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  const { email } = req.user;
  const { userId } = req.params;
  try {
    const user = await findUserByProperty('_id', userId);
    if (!user) {
      res.status(404).json({
        status: 404,
        error: 'User not found',
      });
      return;
    }
    if (user.email !== email) {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
      return;
    }
    const deletedUser = await user.deleteOne();
    if (deletedUser.deletedCount === 0) {
      res.status(404).json({
        status: 404,
        error: 'User not deleted',
      });
      return;
    }
    res.status(200).json({
      status: 200,
      message: 'User deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default deleteUserById;
