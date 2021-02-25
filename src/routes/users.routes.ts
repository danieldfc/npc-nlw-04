import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import SendMailController from '../controllers/SendMailController';

const usersRouter = Router();
const usersController = new UsersController();
const sendMailController = new SendMailController();

usersRouter.post('/', usersController.create);

usersRouter.post('/sendMail', sendMailController.execute);

export default usersRouter;
