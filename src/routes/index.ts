import { Router } from 'express';

import surveyRouter from './survey.routes';
import usersRouter from './users.routes';
import npsRouter from './nps.routes';
import answerRouter from './answer.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/surveys', surveyRouter);
routes.use('/answers', answerRouter);
routes.use('/nps', npsRouter);

export default routes;
