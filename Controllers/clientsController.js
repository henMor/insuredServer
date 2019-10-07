const Client = require('../Models/client.js');
var crypto = require('../Utils/crypto.js');

var clientController = function(){

    function addNewClient(req, res){
        if(req.body.username){
            var newClient = new Client(req.body);
            newClient.save(function(err){
                console.log(err);
                res.status(201).send({});
            })
        }else {
            res.status(400).send({err: 'Missing parameters'});
        }
	}
	
	function removeClient(req,res){
		if( req.body.username){
			console.log('get from db: ',req.body.username);
			Client.findOne({username: req.body.username}, function(err, user){
				console.log(err);
				console.log(user);
				if(! user){
					res.status(401).send();

				}else{
			//		user.remove();
					console.log("delete")
					res.status(200).send();
				}
			});
		}else {
			res.status(400).send();
		}
	}

    
	function loginClient(req, res) {
		console.log('start function');
		if( req.body.username && req.body.password ){
			console.log('get from db: ',req.body.username , req.body.password );
			Client.findOne({username: req.body.username, password: req.body.password}, function(err, user){
				console.log(err);
				console.log(user);
				if(! user){
					res.status(401).send();
				}else{
					res.status(200).send({token: gToken(req.body.username,req.body.password, "a", Date.now())});
				}
			});
		}else {
			res.status(400).send();
		}
	}
    
   
    var split = "_!!_";
	function gToken (username, pwd, role, time) {
		var str = username + split + pwd + split + role + split + time;
		return crypto.getEncrypt(str);
	}
	function getUserObj(token) {
		var array = crypto.getDecrypt(token).split(split);
		return{
			username: array[0],
			password: array[1],
			role: array[2],
			time: array[3]
		}
	}

    return {
        addClient: addNewClient,
        loginClient: loginClient,
		getUserObj: getUserObj,
		removeClient: removeClient 
    }
}

module.exports = clientController();