import { NextFunction, Request, Response } from 'express';
import findUserByProperty from '../../services/user/findUserByProperty';
import createVocabularyService from '../../services/vocabulary/createVocabularyService';

const createVocabulary = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  //@ts-ignore
  const { email } = req.user;
  try {
    const { word, pronunciation, meaning, when_to_say, lesson_no } = req.body;
    const admin = await findUserByProperty('email', email);
    if (!admin) {
      res.status(404).json({
        status: 404,
        error: 'Admin not found',
      });
      return;
    }
    const createdVocabulary = await createVocabularyService({
      word,
      pronunciation,
      meaning,
      when_to_say,
      lesson_no,
      created_by: admin._id,
    });

    if (!createdVocabulary) {
      res.status(500).json({
        status: 500,
        error: 'Error creating vocabulary',
      });
      return;
    }

    res.status(201).json({
      status: 201,
      message: 'Successfully created vocabulary',
      data: createdVocabulary,
    });
  } catch (error) {
    next(error);
  }
};

export default createVocabulary;
