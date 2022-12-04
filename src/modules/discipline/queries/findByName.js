const Discipline = require('../Model');

function findDiscipline(name) {
  return Discipline.findOne({ name: name }).then((doc) => {
    return doc?._id;
  });
}

module.exports = findDiscipline;
