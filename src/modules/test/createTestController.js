const Test = require('./Model');
const getDisciplineID = require('../discipline/controllers/getID');
const getLevelID = require('../level/controllers/getID');
const getSubjectID = require('../level copy/controllers/getID');
const createTest = require('./create');

async function createTestController(req, res) {
  const { discipline, level, subject, tests } = req.body.data;
  const levelID = await getLevelID(level);
  const disciplineID = await getDisciplineID(discipline);
  const subjectID = await getSubjectID(subject);

  tests.forEach(async (el) => {
    await createTest(
      disciplineID,
      levelID,
      subjectID,
      el.title,
      el.difficulty,
      el.duration,
      el.questions,
      res,
    );
  });
}

module.exports = createTestController;
