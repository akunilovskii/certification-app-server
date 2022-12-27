const createDiscipline = require('../queries/create');
const findDiscipline = require('../queries/findByName');

const getDisciplineID = async (discipline) => {
  const foundID = await findDiscipline(discipline);
  if (!foundID) return await createDiscipline(discipline);
  return foundID;
};

module.exports = getDisciplineID;
