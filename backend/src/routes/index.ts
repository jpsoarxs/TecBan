import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
import AuthControllers from '../controllers/AuthControllers';

const routes = express.Router();

const consent = new ConsentControllers();
const auth = new AuthControllers();

routes.post('/consent', consent.create);

routes.post('/auth', auth.index)

export default routes;
