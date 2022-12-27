require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const {
  errorHandler,
  logger,
  parseResponse,
  cors,
  routes,
  dbConnect,
} = require('./modules/core/');
const app = express();
const PORT = process.env.PORT; //5000 port for server, 3000 port for client
const errorMiddleware = require('./modules/user/middlewares/errorMiddleware');

dbConnect();
logger(app);
app.use(cookieParser());
parseResponse(app);
cors(app);
routes(app);
app.use(errorMiddleware);

//if API (route) not found then show that message
errorHandler(app);

// run server to listen port
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
