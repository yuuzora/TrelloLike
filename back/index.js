var express = require('express')
const Api = require('./Api');
var app = express()
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', function(socket){
  console.log('a user connected');
});


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, HEAD, PATCH");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Max-Age", "3600");
  next();
});

app.use('/api', Api);


app.get('/*', function (req, res) {
  res.status(404).send('This page doesn\'t exist.');
})
 
const port = process.env.PORT || 5000;
// app.listen( port, function () {
//   console.log(`Example app listening on port ${port}!`);
// });
http.listen(port, function(){
  console.log('listening on *:5000');
});