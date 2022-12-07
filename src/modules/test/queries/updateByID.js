const message = require('../../utils/messages');
const Test = require('../Model');
const log = console.log;

function updateByID(id, data) {
  return Test.findByIdAndUpdate({ _id: id }, data, { new: true })
    .exec()
    .then((data) => {
      log('Test updated');
      return message.success('Test updated', data);
    })
    .catch((err) => {
      log('Test not updated', err);
      return message.fail('Test not updated', err);
    });
}

module.exports = updateByID;
