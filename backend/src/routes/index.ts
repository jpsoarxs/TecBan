import express from 'express'

import ConsentControllers from '../controllers/ConsentControllers';

import userRoutes from './user.routes';
import SessionRoutes from './session.routes';

const routes = express.Router();

const consent = new ConsentControllers();

routes.get('/', consent.index);

routes.use('/users', userRoutes);
routes.use('/session', SessionRoutes);

export default routes;