var jsonServer = require('json-server');
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
var port = Number(process.env.PORT || 3000);

server.all('*', function (req, res, next) {
    if (req.method === 'GET') {
      next() // Continue
    } else {
      res.sendStatus(403) // Forbidden
    }
  })

server.use(middlewares);
server.use(router);
server.listen(port, function () {
    console.log(`running `)
});