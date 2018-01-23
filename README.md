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

# Added the URLLookup functionality
- Wrote the code for this functionality in the urllokup_view.js, urllokup_model.js, urllokup_route.js
- Also modified the Constants.js according to the constants needed for this functionality
- In my code, urllokup_view calls the urllokup_route. urllokup_route routes according to the rest api given in the browser with the help of urllokup_model

# Added the post URL into the database functionality
- This feature should be available only for the admins
- In this feature the admin can add new URL's into the system and mention whether it is secure or not. He can do this using any URL testing tool

# Steps to get the output
The screenshots of the output are added in the screenshots folder of the application.
In our case, the BaseURL is - localhost:3000/urlinfo/1/
# GET Request
First use encode the URL's {hostname_and_port}/{original_path_and_query_string} from https://www.urlencoder.org website and then test the REST API service in the browser
Some test URL's are,
1. localhost:3000/urlinfo/1/def.com%3A400/cox%2Ftest%3Fid%3D10%26id1%3D20
This is a secure URL
2. localhost:3000/urlinfo/1/def.com%3A40/tester%2Fxyz%3Fid%3D10%26id1%3D20
This is not a secure URL
# POST Request
I used Postman to post the data into the database
POST URL - http://localhost:3000/urlinfo/1
body - {
"name":"def.com:110/abcd/xyz?id=10&id1=20",
"type":"secure"
}
Header - content-type, application/json



# TODO
- Scalability and capacity of the system, asynchronous get request, Unit test cases
