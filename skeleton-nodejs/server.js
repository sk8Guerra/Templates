/**
 * @author Jorge Guerra
 * D.O.G 🐶
 */

 /**
  * @file Main file that creates the http server and adds it to socket.
  */

const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.set('socketio', io);

const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
  if(req.methods == "OPTIONS") {
    res.sendStatus(200);
  } else {
    next();
  }
});

const routes = require('./routes/routes');
app.use('/', routes);

io.on('connect', (socket) => {});

io.on('disconnect', (socket) => {});

http.listen(1998, () => {
  console.log('Server is running');
});
