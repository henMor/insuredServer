var express = require('express');
const clientController = require('../Controllers/clientsController.js');

var userRoutes = function () {

    var route = express.Router();

    route.post('/addClient', clientController.addClient);
    route.post('/loginClient', clientController.loginClient); 
    route.post('/removeClient',clientController.removeClient);
    

    route.get('/allUsers', function(req, res){

    })





    return route;

};

module.exports = userRoutes();