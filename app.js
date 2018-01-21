/**
Author: Sweta Patil
Description: This file is the entry point of the project 
			and has the root object named 'App'.
*/


/**
- App is the root object of the project
- App.packagePath main package path of the project
- App.Constants contains the common constants used in the project
*/
var App = {};  
App.packagePath = '/com/cox/urllookupservice/'; 
App.Constants = require('.'+App.packagePath+'global/constants/Constants').Constants;


/**
Require the things (API's) needed in our project
- express is a web framework, has a web server and used to handle our api request
- Mongoose is needed to interact with our database
- body-parser used for parsing json
*/
var express = require('express');
App.express = express();
var bodyParser = require('body-parser');
App.express.use(bodyParser.json());
App.mongoose = require('mongoose');


module.exports = App;

