const Subject = require('../Model');

function findSubject(name) {
  return Subject.findOne({ name: name }).then((doc) => {
    return doc?._id;
  });
}

module.exports = findSubject;
