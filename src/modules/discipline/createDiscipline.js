const Discipline = require('./Model');

function createDiscipline(name) {
  const newDiscipline = new Discipline({
    name: name,
  });

  newDiscipline
    .save()
    .then(() => {
      console.log('Discipline created');
    })
    .catch(() => {
      console.log('Discipline not created');
    })
    .finally(() => {
      console.log('END');
    });
}

module.exports = createDiscipline;
