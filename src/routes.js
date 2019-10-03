const routers = require('express').Router();
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
// GET, POST, PUT, DELETE

// req.query = acessar query params para filtros.
// req.params = acessar route params para edição (put, delete).
// req.body = acessar o corpo da requisição

routers.post('/sessions', SessionController.store);

routers.post('/spots', SpotController.store);

module.exports = routers;
