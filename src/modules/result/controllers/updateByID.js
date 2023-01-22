const updateById = require('../queries/updateByID');
const getLevelID = require('../../level/controllers/getID');
const getDisciplineID = require('../../discipline/controllers/getID');
const getSubjectID = require('../../subject/controllers/getID');

async function updateByIDController(req, res) {
  const resultID = req.params.resultId;
  const result = req.body;

  console.log('UPDATE id: ', resultID);
  console.log('UPDATE data: ', result);

  const level = await getLevelID(result.level);
  const discipline = await getDisciplineID(result.discipline);
  const subject = await getSubjectID(result.subject);

  const updateResult = await updateById(resultID, {
    discipline,
    level,
    subject,
    title: result.title,
    difficulty: result.difficulty,
    duration: +result.duration,
    questions: result.questions,
  });

  if (updateResult.success) {
    res.status(200).json(updateResult);
  } else {
    res.status(400).json('Result create error');
  }
}

module.exports = updateByIDController;
