/**
Author: Sweta Patil
Description: This file is basically the view of the project on the browser.
			- App is the root object
			- route.getURLLookupRoute(), routes us according to the rest 
				api given in the browser
			- conn is the connection object, which has the details about the database
			- database is mongoose object, which is needed for the mongodb connection
*/

var App = require('../../../../app');
var route = require('../routes/urllookup_route');

var getURLView = function() {
	conn = App.Constants;
	database = App.mongoose;
	
	route.getURLLookupRoute(App.express,conn.urllookupDB,database);
}

module.exports.getURLView = getURLView;