import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
import PropertiesControllers from '../controllers/PropertiesControllers';
import AccountControllers from '../controllers/AccountControllers';

const routes = express.Router();

const consent = new ConsentControllers();
const properties = new PropertiesControllers();
const account = new AccountControllers();

routes.post('/consent', consent.create);
routes.post('/auth', consent.index)

routes.get('/account', account.index)
routes.get('/account/:id', account.show)

routes.get('/properties', properties.index)
routes.get('/properties/:id', properties.show)

export default routes;
