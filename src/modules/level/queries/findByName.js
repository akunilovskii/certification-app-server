const Level = require('../Model');

function findLevel(name) {
  return Level.findOne({ name: name }).then((doc) => {
    return doc?._id;
  });
}

module.exports = findLevel;
