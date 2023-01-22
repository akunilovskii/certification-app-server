const message = require('../../utils/messages');
const Result = require('../Model');
const log = console.log;

function updateByID(id, data) {
  return Result.findByIdAndUpdate({ _id: id }, data, { new: true })
    .exec()
    .then((data) => {
      log('Result updated');
      return message.success('Result updated', data);
    })
    .catch((err) => {
      log('Result not updated', err);
      return message.fail('Result not updated', err);
    });
}

module.exports = updateByID;
