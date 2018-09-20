const routes = require('express').Router();

// Authenticate
const authenticate = require('../middlewares/authentication');

// Advertising
const <name> = require('<directory>');

routes.get('/api/snackncoke/advertising/read/all/', authenticate, <name>);

module.exports = routes;
