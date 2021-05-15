const express = require('express');

const UserController = require('./controller/UserController')
const AddressesController = require('./controller/AddressesController')

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users/list', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete);



routes.post('/users/:user_id/Addresses', AddressesController.store);
routes.get('/users/:user_id/Addresses/list', AddressesController.index);
routes.put('/users/:user_id/:id/Addresses/update', AddressesController.update);




module.exports = routes;