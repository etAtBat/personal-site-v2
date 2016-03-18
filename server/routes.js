exports.routes = function(app) {

  app.get('/public', function(req, res) {
    res.send('public get');
  });

  //catch all route
  app.get('*', function(req, res) {
    res.render('index.html');
  });

};