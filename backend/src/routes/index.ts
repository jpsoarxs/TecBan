import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
import PropertiesControllers from '../controllers/PropertiesControllers';
import AccountControllers from '../controllers/AccountControllers';
import BalanceControllers from '../controllers/BalanceControllers';

const routes = express.Router();

const consent = new ConsentControllers();
const properties = new PropertiesControllers();
const account = new AccountControllers();
const balance = new BalanceControllers();

routes.post('/consent', consent.create);
routes.post('/auth', consent.index)

routes.get('/account', account.index)
routes.get('/account/:id', account.show)

routes.get('/balance', balance.index)
routes.get('/balance/:id', balance.show)

routes.get('/properties', properties.index)
routes.get('/properties/:id', properties.show)

export default routes;
