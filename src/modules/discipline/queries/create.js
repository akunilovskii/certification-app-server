const Discipline = require('../Model');

function createDiscipline(name) {
  const newDiscipline = new Discipline({
    name: name,
  });

  return newDiscipline
    .save()
    .then((doc) => {
      return doc._id;
    })
    .catch(() => {
      console.log('Discipline not created');
    })
    .finally(() => {});
}

module.exports = createDiscipline;
