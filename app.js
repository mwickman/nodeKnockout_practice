var restify = require('restify');
var server = restify.createServer({
  name: "myapp",
});
var data = require('./data.json');
server.use(restify.queryParser());
//server.use(restify.bodyParser());

server.get('/', function(req, res, next){
  console.log(req.query);
  console.log(req.path());
  console.log(data);

  var d = new Date(req.time());
  console.log("date is: ", d);
  res.json(data);
  return next();
})



server.listen(3000);