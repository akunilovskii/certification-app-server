const Test = require('./Model');
const createDiscipline = require('../discipline/createDiscipline');
const findDiscipline = require('../discipline/findDiscipline');
async function createTest(req, res) {
  // console.log(req.body.data);
  const tests = req.body.data.tests;
  const discipline = req.body.data.discipline;

  const getDisciplineID = async (discipline) => {
    const foundID = await findDiscipline(discipline);
    console.log('foundID: ', foundID);

    if (!foundID) {
      const createdID = await createDiscipline(discipline);
      console.log('created disciplineID:', createdID);
      return createdID;
    }
    return foundID;
  };

  const newTest = new Test({
    discipline: await getDisciplineID(discipline),
    title: tests[0].title,
    difficulty: tests[0].difficulty,
    duration: tests[0].duration,
    tests: tests[0],
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
