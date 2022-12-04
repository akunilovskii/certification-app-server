const createDiscipline = require('../queries/create');
const findDiscipline = require('../queries/findByName');

const getDisciplineID = async (discipline) => {
  const foundID = await findDiscipline(discipline);

  if (!foundID) {
    const createdID = await createDiscipline(discipline);
    return createdID;
  }
  return foundID;
};

module.exports = getDisciplineID;
