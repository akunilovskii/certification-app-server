const Discipline = require('./Model');

function findDiscipline(name) {
  return Discipline.findOne({ name: { $eq: name } }, (err, doc) => {
    if (err) {
      console.log('Error', err);
    } else {
      console.log('Result: ', doc);
    }
  });
}

module.exports = findDiscipline;
