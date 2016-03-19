exports.routes = function(app) {

  //catch all route
  app.get('*', function(req, res) {
    res.render('index.html');
  }); //only going to be serving a single page

};