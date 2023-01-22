const message = require('../../utils/messages');
const Result = require('../Model');
const log = console.log;

function createResult(values) {
  const newResult = new Result({ ...values });
  return newResult
    .save()
    .then((data) => {
      log('Result created');
      return message.success('Result created', data);
    })
    .catch((err) => {
      log('Result not created', err);
      return message.fail('Result not created', err);
    });
}

module.exports = createResult;
