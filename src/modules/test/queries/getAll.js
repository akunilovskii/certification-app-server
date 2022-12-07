const message = require('../../utils/messages');
const Test = require('../Model');
const log = console.log;

function getAll() {
  return Test.find()
    .sort({ createdAt: -1 })
    .exec()
    .then((data) => {
      log('Get all tests success');
      return message.success('Get all tests success', data);
    })
    .catch((err) => {
      log('Get all tests fail', err);
      return message.fail('Get all tests fail', err);
    });
}

module.exports = getAll;
