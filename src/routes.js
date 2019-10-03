const multer = require('multer');
const routers = require('express').Router();
const uploadConfig = require('./config/upload');


const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');

routers.post('/sessions', SessionController.store);
routers.post('/spots', upload.single('thumbnail'), SpotController.store);

module.exports = routers;
