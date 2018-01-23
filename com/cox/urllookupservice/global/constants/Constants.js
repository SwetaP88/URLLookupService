/**
Author: Sweta Patil
Description: This file is contains all the constants needed for the project.
			If any constant is to be added to the project, add it in this file.
			- urllookupDB id the database connection object needed for our project.
				We can add multiple databse objects if needed
*/


var getConstants = function() {
	var CONSTANTS = {
		urllookupDB: {
			hostName: 'localhost',
			port: '3000',
			baseURL: '/urlinfo/1',
			db_type: 'mongodb',
			db_name: 'urllookupservice',
			db_connection: 'url_check',
			defaultMessage: 'Go to the required URL.',
			secureMessage: 'Great! Looks like the URL you are looking for is quite secure!',
			notSecureMessage: 'Alert! Not a secure URL!! Try accessing some other URL.',
			dbConnectionMsg: 'Connected to the database..'
		}
	};
	
	return CONSTANTS;
}

module.exports.Constants = getConstants();