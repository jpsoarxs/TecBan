import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
<<<<<<< HEAD
import AuthControllers from '../controllers/AuthControllers';
=======

import userRoutes from './user.routes';
import SessionRoutes from './session.routes';
>>>>>>> 48f36eb2520c286671b929cedfe0baf83f156b47

const routes = express.Router();

const consent = new ConsentControllers();
const auth = new AuthControllers();

routes.post('/consent', consent.create);

<<<<<<< HEAD
routes.post('/auth', auth.index)
=======
routes.use('/users', userRoutes);
routes.use('/session', SessionRoutes);
>>>>>>> 48f36eb2520c286671b929cedfe0baf83f156b47

export default routes;
