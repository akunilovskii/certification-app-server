const createLevel = require('../queries/create');
const findLevel = require('../queries/findByName');

const getLevelID = async (level) => {
  const foundID = await findLevel(level);
  if (!foundID) return await createLevel(level);
  return foundID;
};

module.exports = getLevelID;
