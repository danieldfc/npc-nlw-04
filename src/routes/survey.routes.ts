import { Router } from 'express';

import SurveysController from '../controllers/SurveysController';

const surveyRouter = Router();
const surveyController = new SurveysController();

surveyRouter.get('/', surveyController.index);
surveyRouter.post('/', surveyController.create);

export default surveyRouter;
