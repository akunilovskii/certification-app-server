const Subject = require('../Model');

function createSubject(name) {
  const newSubject = new Subject({
    name: name,
  });

  return newSubject
    .save()
    .then((doc) => {
      return doc._id;
    })
    .catch(() => {
      console.log('Subject not created');
    })
    .finally(() => {});
}

module.exports = createSubject;
