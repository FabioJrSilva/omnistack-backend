const multer = require('multer');
const routers = require('express').Router();
const uploadConfig = require('./config/upload');

const upload = multer(uploadConfig);

const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const DashboardController = require('./controllers/DashboardController');
const BookingController = require('./controllers/BookingController');

routers.post('/sessions', SessionController.store);
routers.post('/spots', upload.single('thumbnail'), SpotController.store);
routers.get('/spots', SpotController.index);
routers.get('/dashboard', DashboardController.show);
routers.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routers;
