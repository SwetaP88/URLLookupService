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
var bodyParser = require('body-parser');

// New promise created, to connect to the database and get the result whether the 
// URL is secure or not
var open_db = function(conn,database){
	return new Promise(function(resolve, reject) {
		// Use connect method to connect to the Server
		database.connect(conn.db_type+'://'+conn.hostName+'/'+conn.db_name, function(err, db) {
			if(err) {
				console.log('Error....', err);
				reject(err);
			}else {
				console.log(conn.dbConnectionMsg);
				resolve(db);
			}
		});
	});
}
	
// get response connection to database logic

	
var getURLLookupRoute = function(web,conn,database) {
	
	const router = web.Router;
	web.use(bodyParser.json());
	
	// default api get request
	web.get('/', async function(req, res){
		try {
			await res.send(conn.defaultMessage);
		} catch(error) {
			res.send(error);
		}
	});
	
	// default GET /urlinfo/1/ request
	web.get('/urlinfo/1/', async function(req, res){
		try {
			await res.send(conn.defaultMessage);
		} catch(error) {
			res.send(error);
		}
	});
	
	// api get request for the specified url given in the browser
	web.get(conn.baseURL+'/:host_port/:path_query', async function(req, res){
		
		var getAPI = function getAPI() {
			// Check the last character of the query parameters
			var query_params = req.params.path_query;
			var url_last = query_params[query_params.length -1];
			if(url_last == '/') query_params = query_params.slice(0, -1); 

			var check_url = req.params.host_port+'/'+query_params;

			var db_connection = open_db(conn,database);

			// New promise created, to connect to the database and get the result whether the 
			// URL is secure or not
			//var db_connection = open_db(conn);
			db_connection.then(function(){ // get the data from the connection
				return model.getURLLookupModel(conn,database,check_url);  
			})
			.then(function(result){ // Display the data on the browser
				if(result == 'secure') return res.send(conn.secureMessage);
				else return res.send(conn.notSecureMessage);
			})
			.catch(function(err){
				return res.send(err);
			})
		}
		
		try {
			await getAPI(); // asynchronous get requests handled here
		} catch(error) {
			res.send(error);
		}
	});

	// api post request for the specified url given in the browser
	web.post(conn.baseURL, async function(req, res){
	
		var postAPI = function postAPI() {
			// New promise created, to connect to the database and 
			// then post the request into the database
			var db_connection = open_db(conn,database);
			db_connection.then(function(db){ // get the data from the connection
				return model.postURLLookupModel(req.body,conn,database); 
			}).catch(function(err){
				return res.send(err);
			})
    	}
    	
    	try {
			await postAPI(); // asynchronous posts requests handled here
			res.send('Data added successfully!!');
		} catch(error) {
			res.send(error);
		}
	});
	
	// the request is listened on port given in the Constants.js file
	web.listen(conn.port, function() {
  		console.log('Listening on port '+ conn.port);
	});
	
};

module.exports.getURLLookupRoute = getURLLookupRoute;