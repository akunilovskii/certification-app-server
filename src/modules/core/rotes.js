const infoRouter = require('../info/Rotes');
const userRouter = require('../user/Rotes');
const testRouter = require('../test/Rotes');

function routes(app) {
  app.use('/info', infoRouter);
  app.use('/user', userRouter);
  app.use('/tests', testRouter);
}

module.exports = routes;
