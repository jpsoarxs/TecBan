import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
import AuthControllers from '../controllers/AuthControllers';

const routes = express.Router();

const consent = new ConsentControllers();

routes.post('/consent', consent.create);
routes.post('/auth', consent.index)

export default routes;
