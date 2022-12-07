const message = require('../../utils/messages');
const Test = require('../Model');
const log = console.log;

function createTest(values) {
  const newTest = new Test({ ...values });
  return newTest
    .save()
    .then((data) => {
      log('Test created');
      return message.success('Test created', data);
    })
    .catch((err) => {
      log('Test not created', err);
      return message.fail('Test not created', err);
    });
}

module.exports = createTest;
