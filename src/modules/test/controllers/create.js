const getDisciplineID = require('../../discipline/controllers/getID');
const getLevelID = require('../../level/controllers/getID');
const getSubjectID = require('../../subject/controllers/getID');
const createTest = require('../queries/create');

async function createTestController(req, res) {
  const test = req.body?.data || req;
  const level = await getLevelID(test.level);
  const discipline = await getDisciplineID(test.discipline);
  const subject = await getSubjectID(test.subject);

  const createResult = await createTest({
    discipline,
    level,
    subject,
    title: test.title,
    difficulty: test.difficulty,
    duration: +test.duration,
    questions: test.questions,
  });
  if (!!res) {
    if (createResult.success) {
      res.status(200).json(createResult);
    } else {
      res.status(400).json('Test create error');
    }
  }
}

module.exports = createTestController;
