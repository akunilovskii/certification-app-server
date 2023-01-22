const message = require('../../utils/messages');
const Result = require('../Model');
const log = console.log;

function getAll(userId) {
  return Result.find({ user: userId })
    .then((data) => {
      log({ data });
      return message.success('Get all results success', data);
    })
    .catch((err) => {
      log('Get all results fail', err);
      return message.fail('Get all results fail', err);
    });
}

module.exports = getAll;
