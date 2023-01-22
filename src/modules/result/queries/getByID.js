const message = require('../../utils/messages');
const Result = require('../Model');
const log = console.log;

function getByID(id) {
  return Result.findById(id, { createdAt: 0, updatedAt: 0 })
    .populate({
      path: 'discipline',
      select: 'name',
    })
    .populate({
      path: 'level',
      select: 'name',
    })
    .populate({
      path: 'subject',
      select: 'name',
    })
    .exec()
    .then((data) => {
      log('Get result by ID success');
      return message.success('Get result by ID success', data);
    })
    .catch((err) => {
      log('Get result by ID fail', err);
      return message.fail('Get result by ID fail', err);
    });
}

module.exports = getByID;
