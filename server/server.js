var express = require('express');
var app = express();
var router = require('./routes.js');

var port = 3000;

app.use(express.static('client'));

//routes to be handled in routes.js file
router.routes(app);

app.listen(port);
console.log('listening on port ', port);