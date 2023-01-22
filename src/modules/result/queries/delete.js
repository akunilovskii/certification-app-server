const message = require('../../utils/messages');
const Result = require('../Model');
const log = console.log;

function deleteByID(id) {
  return Result.deleteOne({ _id: id })
    .exec()
    .then((data) => {
      log('Delete result by ID success');
      return message.success('Delete result by ID success', data);
    })
    .catch((err) => {
      log('Delete result by ID fail', err);
      return message.fail('Delete result by ID fail', err);
    });
}

module.exports = deleteByID;
