import express from 'express'

import ConsentControllers from '../controllers/ConsentControllers';

import userRoutes from './user.routes';

const routes = express.Router();

const consent = new ConsentControllers();

routes.get('/', consent.index);

routes.use('/users', userRoutes);

export default routes;