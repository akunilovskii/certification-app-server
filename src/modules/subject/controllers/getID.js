const createSubject = require('../queries/create');
const findSubject = require('../queries/findByName');

const getSubjectID = async (subject) => {
  const foundID = await findSubject(subject);
  if (!foundID) return await createSubject(subject);
  return foundID;
};

module.exports = getSubjectID;
