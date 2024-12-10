import { NextFunction, Request, Response } from 'express';

const logoutUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.clearCookie('token');
    res.status(200).json({
      status: 200,
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};

export default logoutUser;