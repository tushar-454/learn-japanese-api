import bcrypt from 'bcrypt';
import { NextFunction, Request, Response } from 'express';
import createUserService from '../../services/user/createUserService';
import findUserByProperty from '../../services/user/findUserByProperty';

const createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, email, password, photo } = req.body;

  try {
    const isUserExists = await findUserByProperty('email', email);

    if (isUserExists) {
      res.status(400).json({
        status: 400,
        error: 'User already exists',
      });
      return;
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await createUserService({ name, email, password: hashedPassword, photo });

    if (!createdUser) {
      res.status(400).json({
        status: 400,
        error: 'User not created',
      });
      return;
    }

    // remove password from the response
    const user = createdUser.toObject();
    delete user.password;
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;

    res.status(201).json({
      status: 201,
      message: 'User created successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export default createUser;
