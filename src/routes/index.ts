import { Router } from 'express';

import surveyRouter from './survey.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/surveys', surveyRouter);

export default routes;
