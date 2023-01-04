const updateById = require('../queries/updateByID');
const getLevelID = require('../../level/controllers/getID');
const getDisciplineID = require('../../discipline/controllers/getID');
const getSubjectID = require('../../subject/controllers/getID');

async function updateByIDController(req, res) {
  const testID = req.params.testId;
  const test = req.body;

  console.log('UPDATE id: ', testID);
  console.log('UPDATE data: ', test);

  const level = await getLevelID(test.level);
  const discipline = await getDisciplineID(test.discipline);
  const subject = await getSubjectID(test.subject);

  const updateResult = await updateById(testID, {
    discipline,
    level,
    subject,
    title: test.title,
    difficulty: test.difficulty,
    duration: +test.duration,
    questions: test.questions,
  });

  if (updateResult.success) {
    res.status(200).json(updateResult);
  } else {
    res.status(400).json('Test create error');
  }
}

module.exports = updateByIDController;
