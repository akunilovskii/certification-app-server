const userRouter = require('../user/Routes');
const testRouter = require('../test/Routes');

function routes(app) {
  app.use('/user', userRouter);
  app.use('/tests', testRouter);
  // app.use('/login', (req, res) => {
  //   res.send({
  //     token: 'test123',
  //   });
  // });
}

module.exports = routes;
