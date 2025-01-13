const routes = require('express').Router();
const lesson1controller = require('../controllers/lesson1') 

routes.get('/', lesson1controller.cheer);
routes.get('/alamo', lesson1controller.alamo);
routes.get('/asu', lesson1controller.asu);
routes.get('/kansas', lesson1controller.kansas);

module.exports = routes;