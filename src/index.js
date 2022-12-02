const express = require('express');
const home = require('./modules/home/home');
const info = require('./modules/info/info'); //default export no needs {}
const errorHandler = require('./modules/core/errorHandler');
const logger = require('./modules/core/logger');
const parseResponse = require('./modules/core/parseResponse');
const cors = require('./modules/core/cors');
const routes = require('./modules/core/routes');
const dbConnect = require('./modules/core/db');
const app = express();
const PORT = 5000; //5000 port for server, 3000 port for client

// localhost:5000/     - address when will run function in line 7

/* app.get('/', (req, res) => {
    res.send('Hello!');
}) */

dbConnect();
logger(app);
parseResponse(app);
cors(app);
routes(app);

//if API (route) not found then show that message
errorHandler(app);

function r(req, res) {
  res.send('RRRRRRRRR');
}

// run server to listen port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

// control + C in terminal stops server;
