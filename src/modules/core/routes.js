const infoRouter = require('../info/Routes');
const userRouter = require('../user/Routes');
const testRouter = require('../test/Routes');

function routes(app) {
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
  app.use('/tests', testRouter);
}

module.exports = routes;
