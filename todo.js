(function() {
  var app, express;
  express = require('express');
  app = express.createServer();
  app.configure('development', function() {
    app.use(express.logger());
    app.use(express.static(__dirname + '/public'));
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });
  app.get('/', function(req, res) {
    return res.render('index.html');
  });
  app.get('/todos', function(req, res) {
    return res.send([
      {
        id: 1,
        name: "Take out the bins"
      }, {
        id: 2,
        name: "Feed the dog"
      }, {
        id: 3,
        name: "Get milk"
      }
    ]);
  });
  app.listen(4000);
}).call(this);
