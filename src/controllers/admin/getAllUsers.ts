import { NextFunction, Request, Response } from 'express';
import findAllUsers from '../../services/user/fineAllUsers';

const getAllUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: 200,
      message: 'All users',
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllUsers;
