const createSubject = require('../queries/create');
const findSubject = require('../queries/findByName');

const getSubjectID = async (subject) => {
  const foundID = await findSubject(subject);

  if (!foundID) {
    const createdID = await createSubject(subject);
    return createdID;
  }
  return foundID;
};

module.exports = getSubjectID;
