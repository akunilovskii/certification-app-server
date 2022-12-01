const Test = require('./Model');

function createTest(req, res) {
  const newTest = new Test({
    title: req.body.title,
    difficulty: req.body.difficulty,
    duration: req.body.duration,
  });

  newTest
    .save()
    .then(() => {
      res.status(200).json('Test created');
    })
    .catch(() => {
      res.status(400).json('Test not created');
    })
    .finally(() => {
      console.log('END');
    });
}

module.exports = createTest;
