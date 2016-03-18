exports.routes = function(app) {

  app.get('/public', function(req, res) {
    res.send('public get');
  });

};