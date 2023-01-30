const userRouter = require('../user/Routes');
const testRouter = require('../test/Routes');
const resultRouter = require('../result/Routes');

function routes(app) {
  app.use('/', (req, res) => res.status(200).send('Server is running'));
  app.use('/user', userRouter);
  app.use('/test', testRouter);
  app.use('/result', resultRouter);

  // app.use('/login', (req, res) => {
  //   res.send({
  //     token: 'test123',
  //   });
  // });
}

module.exports = routes;
