/**
Author: Sweta Patil
Description: This file helps us to connect to the model and the database given. 
			database.connection.collection().find() function, returns an object
			of the table rows.
			- conn is the connection object, which has the details about the database
			- database is mongoose object, which is needed for the mongodb connection
*/

var schemaSet = false;
var schemaSetCheck = function(conn,database) {
	// url_check Schema for the database given
	var url_check_Schema = database.Schema({
		name:{
			type: String,
			require: true
		},
		type:{
			type: String,
			require: true
		}
	});

	// register the schema for the database
	database.model(conn.db_name,url_check_Schema);
	
	schemaSet = true;
};

var getURLLookupModel = function(conn,database,check_url) {
	if(!schemaSet) schemaSetCheck(conn,database);

	// querry to iterate through the database and check if the requested api
	// is secure or not
	var db_result = '';
	
	// a new promise created for .find() function, because .find() is a asynchronous function
    return new Promise(function(resolve, reject) {
        var collection_results = database.connection.collection(conn.db_connection).find({name: check_url},{type: true, _id: false, name: false}).toArray(function(err,result){
			if (err) {
            	reject(err);
            	database.connection.close();
        	} else {
            	if(result.length != 0) resolve(result[0].type);
            	else resolve(conn.notSecureMessage);
            	database.connection.close();
        	}
		})
    });
	
};

module.exports.getURLLookupModel = getURLLookupModel;

