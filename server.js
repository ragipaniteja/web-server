var express = require('express');
var app = express();
var PORT = 3000;

var middleware = require('./middleware.js');



 app.use(middleware.logger);


app.get('/about',middleware.requireAuthentication, function(req,res){
	res.send('About us');
});


app.get('/contact',function(req, res){
	res.send('contact us at 673-450-3998')

});
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function(){
	console.log('Express server started on port '+PORT);
});
