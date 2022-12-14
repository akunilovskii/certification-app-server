const message = require('../../utils/messages');
const Test = require('../Model');
const log = console.log;

function deleteByID(id) {
  return Test.deleteOne({ _id: id })
    .exec()
    .then((data) => {
      log('Delete test by ID success');
      return message.success('Delete test by ID success', data);
    })
    .catch((err) => {
      log('Delete test by ID fail', err);
      return message.fail('Delete test by ID fail', err);
    });
}

module.exports = deleteByID;
