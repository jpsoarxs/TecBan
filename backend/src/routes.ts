import express from 'express'

import ConsentControllers from './controllers/ConsentControllers'

const routes = express.Router();

const consent = new ConsentControllers();

routes.get('/', consent.index)

export default routes;