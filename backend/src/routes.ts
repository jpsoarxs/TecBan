import express from 'express'

import TesteControllers from './controllers/TesteControllers'

const routes = express.Router();

const teste = new TesteControllers();

routes.get('/', teste.index)

export default routes;