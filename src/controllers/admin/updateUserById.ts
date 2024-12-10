import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import findUserByProperty from '../../services/user/findUserByProperty';
import updateUserByIdService from '../../services/user/updateUserByIdService';

const updateUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  // @ts-ignore
  const { userId } = req.params;
  const { name, email, password, role, photo } = req.body;
  try {
    const user = await findUserByProperty('_id', userId);
    if (!user) {
      res.status(404).json({
        status: 404,
        error: 'User not found',
      });
      return;
    }

    let hashedPassword;
    if (password) hashedPassword = await bcrypt.hash(password, 10);
    await updateUserByIdService(userId, {
      name,
      email,
      password: hashedPassword,
      role,
      photo,
    });
    res.status(200).json({
      status: 200,
      message: 'User updated successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default updateUserById;
