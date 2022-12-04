const Test = require('./Model');

function createTest(
  disciplineID,
  levelID,
  subjectID,
  title,
  difficulty,
  duration,
  questions,
  res,
) {
  const newTest = new Test({
    discipline: disciplineID,
    level: levelID,
    subject: subjectID,
    title: title,
    difficulty: difficulty,
    duration: duration,
    questions: questions,
  });

  newTest
    .save()
    .then(() => {
      res.status(200).json('Test created');
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('Test not created');
    })
    .finally(() => {
      console.log('END');
    });
}

module.exports = createTest;
