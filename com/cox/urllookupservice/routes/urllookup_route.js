/**
Author: Sweta Patil
Description: This file helps us to route according to the rest api given in the browser.
			- web object is a express web framework object, it has a web server 
				and used to handle our api (get,post,put,etc.) request
			- conn is the connection object, which has the details about the database
			- database is mongoose object, which is needed for the mongodb connection
*/

var model = require('../models/urllookup_model');
var Promise = require('rsvp').Promise;

var getURLLookupRoute = function(web,conn,database) {

	// default api get request
	web.get('/', function(req, res){
		res.send(conn.defaultMessage);
	});
	
	// api get request for the specified url given in the browser
	web.get(conn.baseURL+'/:host_port/:path_query', function(req, res){
		var check_url = '/'+req.params.host_port+'/'+req.params.path_query+'/';
	
		// New promise created, to connect to the database and get the result whether the 
		// URL is secure or not
		function open_db(){
    		return new Promise(function(resolve, reject) {
        		// Use connect method to connect to the Server
        		database.connect(conn.db_type+'://'+conn.hostName+'/'+conn.db_name, function(err, db) {
            		if(err) {
            			console.log('Error....', error);
                		reject(err);
            		}else {
            			console.log(conn.dbConnectionMsg);
                		resolve(db);
            		}
        		});
        	});
		}
		
		var db_connection = open_db();
		db_connection.then(function(db){ // get the data from the connection
        	return model.getURLLookupModel(conn,database,check_url);  
    	})
    	.then(function(result){ // Display the data on the browser
    		if(result == 'secure') res.send(conn.secureMessage);
    		else res.send(conn.notSecureMessage);
    	})
    	.catch(function(err){
        	res.send(err);
    	})
		
	});

	// the request is listened on port given in the Constants.js file
	web.listen(conn.port, function() {
  		console.log('Listening on port '+ conn.port);
	});
};

module.exports.getURLLookupRoute = getURLLookupRoute;