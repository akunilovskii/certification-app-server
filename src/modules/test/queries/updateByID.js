const Test = require('../Model');

function updateByID(req, res) {
  console.log(req.body.data.test.questions);
  Test.findByIdAndUpdate({ _id: req.params.testId }, req.body.data.test, { new: true })
    .exec()
    .then((data) => {
      console.log('TEST updateById result: ', data);
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json('Test update error');
    });
}

module.exports = updateByID;
