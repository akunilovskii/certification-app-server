const Test = require('./Model');

function updateByID(req, res) {
  const testId = req.params.testId;

  console.log('testId: ', testId)
  console.log('body: ', req.body)
  console.log('questions: ', req.body.data.test.questions)

  Test.updateOne({ _id: testId }, req.body)
    .exec()
    .then((data) => {
      console.log('TEST updateById result: ', data)
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Test update error');
    });
}

module.exports = updateByID;
