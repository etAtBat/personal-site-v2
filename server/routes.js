exports.routes = function(app) {
  // console.log(app);

  app.get('/', function(req, res) {
    res.send('hello world\n');
  });

};