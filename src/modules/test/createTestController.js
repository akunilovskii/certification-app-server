const Test = require('./Model');
const getDisciplineID = require('../discipline/controllers/getID');
const getLevelID = require('../level/controllers/getID');
const getSubjectID = require('../subject/controllers/getID');
const createTest = require('./create');

async function createTestController(req, res) {
  const { discipline, level, subject, test } = req.body.data;
  const levelID = await getLevelID(level);
  const disciplineID = await getDisciplineID(discipline);
  const subjectID = await getSubjectID(subject);

  res = await createTest(
    disciplineID,
    levelID,
    subjectID,
    test.title,
    test.difficulty,
    test.duration,
    test.questions,
    res,
  );
}

module.exports = createTestController;
