import { NextFunction, Request, Response } from 'express';
import findUserByProperty from '../../services/user/findUserByProperty';

const getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // @ts-ignore
  const { email } = req.user;
  const { userId } = req.params;
  try {
    const isUserExist = await findUserByProperty('_id', userId);
    if (!isUserExist) {
      res.status(404).json({ status: 404, error: 'User not found' });
      return;
    }
    if (isUserExist.email !== email) {
      res.status(403).json({ status: 403, error: 'Forbidden' });
      return;
    }
    res.status(200).json({
      status: 200,
      message: 'User fetched successfully',
      data: {
        _id: isUserExist._id,
        name: isUserExist.name,
        email: isUserExist.email,
        photo: isUserExist.photo,
        role: isUserExist.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

export default getUserById;
