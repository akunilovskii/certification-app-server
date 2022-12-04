const Level = require('../Model');

function createLevel(name) {
  const newLevel = new Level({
    name: name,
  });

  return newLevel
    .save()
    .then((doc) => {
      return doc._id;
    })
    .catch(() => {
      console.log('Level not created');
    })
    .finally(() => {});
}

module.exports = createLevel;
