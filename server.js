var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var app = express();

//Connect the database by adding a url to the mongoose instance connection
//mongose = require('mongoose');

//Load the created moodel - car
//Car = require('.api/models/carsListmodel');

//API file for interacting with MongoDB
var api = require('./api/routes/api');

//Body Parser 
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

//Providing a Connect/Express Middleware
const cors = require('cors');
app.use(cors());

//mongoose instance connection url connction
//mongose.Promise = global.Promise;
//mongose.connect('mongo://localhost/cars');

//Import the routes
//var routes = require('./routes/carListRoutes');
//Register the route
//routes(app);

//Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

//API location
app.use('/api', api);

//Send all other requests to the Angular app
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
var port = process.env.PORT || '3000';

app.set('port', port);
var server = http.createServer(app);
server.listen(port);

console.log('server started on:' + port);