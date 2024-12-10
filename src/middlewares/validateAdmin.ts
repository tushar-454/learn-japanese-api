import { NextFunction, Request, Response } from 'express';

const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    //@ts-ignore
    const { role } = req.user;
    if (role !== 'admin') {
      res.status(403).json({
        status: 403,
        error: 'Forbidden',
      });
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
};

export default validateAdmin;
