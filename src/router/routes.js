const express = require('express');
const UserController = require('../controller/UserController');
const AddressesController = require('../controller/AddressesController');

const routes = express.Router();

routes.post('/users', UserController.store);
routes.get('/users/list', UserController.index);
routes.get('/users/list:id', UserController.listarUm);
routes.put('/users/update/:id', UserController.atualizar);
routes.delete('/users/delete/:id', UserController.delete);

routes.post('/:user_id/addresses', AddressesController.store);

module.exports = routes;