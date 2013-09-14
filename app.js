 var express = require('express'),
     app = express();
 var cons = require('consolidate');

//Mongo
var MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;

 MongoClient.connect("mongodb://nodejitsu:203c1fc950fac650fd1684aba411ef6c@paulo.mongohq.com:10053/nodejitsudb566341693", {native_parser:true}, function(err, db) {
 	app.engine('html', cons.swig);
 	app.set('view engine', 'html');
 	app.set('views', __dirname);

 	console.log(__dirname);
 	app.get('/', function (req, res) {
 			db.collection('clients').findOne({}, function (err, doc) {
 		        res.render('welcome', { name: doc.name, cache: false });
 		    });	 
 	});
     app.listen(8080);
     console.log('Server Corriendo');
 });
