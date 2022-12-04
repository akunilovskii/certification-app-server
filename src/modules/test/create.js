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
    .then((data) => {
      return res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      return res.status(400).json('Test not created');
    });
}

module.exports = createTest;
