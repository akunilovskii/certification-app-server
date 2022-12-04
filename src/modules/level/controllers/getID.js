const createLevel = require('../queries/create');
const findLevel = require('../queries/findByName');

const getLevelID = async (level) => {
  const foundID = await findLevel(level);

  if (!foundID) {
    const createdID = await createLevel(level);
    return createdID;
  }
  return foundID;
};

module.exports = getLevelID;
