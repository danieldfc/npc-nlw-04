import { Router } from 'express';
import AnswerController from '../controllers/AnswerController';

const answersRouter = Router();
const answerController = new AnswerController();

answersRouter.get('/:value', answerController.show);

export default answersRouter;
