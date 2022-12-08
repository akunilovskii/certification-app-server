const message = require('../../utils/messages');
const Test = require('../Model');
const log = console.log;

function getByID(id) {
  return Test.findById(id)
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
      log('Get test by ID success');
      return message.success('Get test by ID success', data);
    })
    .catch((err) => {
      log('Get test by ID fail', err);
      return message.fail('Get test by ID fail', err);
    });
}

module.exports = getByID;
