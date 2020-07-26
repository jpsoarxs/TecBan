import express from 'express';

import ConsentControllers from '../controllers/ConsentControllers';
import PropertiesControllers from '../controllers/PropertiesControllers';

const routes = express.Router();

const consent = new ConsentControllers();
const properties = new PropertiesControllers();

routes.post('/consent', consent.create);
routes.post('/auth', consent.index)

routes.get('/properties', properties.index)
routes.get('/properties/:id', properties.show)

export default routes;
