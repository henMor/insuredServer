var express = require('express');
const clientController = require('../Controllers/clientsController.js');
var mongo = require('mongodb').MongoClient;
//Assert library (Perhaps overkill if you are writing production-level code)
var assert = require('assert');

var userRoutes = function () {

    var route = express.Router();

    route.post('/addClient', clientController.addClient);
    route.post('/loginClient', clientController.loginClient); 
    route.post('/removeClient',clientController.removeClient);
    

    route.get('/ShowAllUsers', function(req,res,next){
        var resultArray = [];
        mongo.connect(url, function(err, db){
          assert.equal(null, err);
          var cursor = db.collection('posts').find();
          cursor.forEach(function(doc, err){
            assert.equal(null, err);
            resultArray.push(doc);
          }, function(){
            db.close();
            //I have no index file to render, so I print the result to console
            //Also send back the JSON string bare through the channel
            console.log(resultArray);
            res.send(resultArray);
          });
        });
      });





    return route;

};

module.exports = userRoutes();