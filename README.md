# URLLookupService
This is a project about creating a web service to which scans traffic looking for a malware. Before allowing HTTP connections to be made, this proxy asks a service that maintains several databases of malware URL's if the resource being requested is known to contain malware.

# Technologies Used for the project
Node, Express and MongoDB

# Basic Setup for the project
- Install node.js v8.9.4 on your machine. This is a javascript on the server.
- Install express.js through npm. This is a web framework, has a web server and used to handle our request.
- Install MongoDB. This is our datastore
- Install Mongoose. This is used to interact with our database. This can also be installed through npm.

# Start the project

# Initializing the project
- Create a project on your machine as a git project and link it with the remote github if needed to share with someone
- Go to your project folder and initialize npm using command init npm. This command is used to initialize the package.json file for your project. Create app.js file and add this as the entry point in our project
- Go to package.json and add all the dependencies needed for the project. For this project. I have added express, body-parser and mongoose. After adding the dependencies, install it using comand npm install
- We also need to install express for this project. Do this by using command npm install express -save

# app.js
- This is the entry point of our project.

# Architecture of the project
- Created basic MVC architecture under the /com/cox/basicurllookp/ package. Also created database, global, models, routes and views folder for the same



