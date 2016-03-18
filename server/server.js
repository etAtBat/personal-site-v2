var express = require('express');
var app = express();
var path = require('path');
var router = require('./routes.js');
var ejs = require('ejs');

var port = 3000;

app.use(express.static(path.join(__dirname, '../client/pages')));
app.set('views', path.join(__dirname, '../client/pages'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');


//routes to be handled in routes.js file
router.routes(app);

app.listen(port);
console.log('listening on port ', port);