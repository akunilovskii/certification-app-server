const Test = require('./Model');
const createDiscipline = require('../discipline/createDiscipline');
const findDiscipline = require('../discipline/findDiscipline');
function createTest(req, res) {
  console.log(req.body);
  const tests = req.body.tests;

  tests.forEach(async (el) => {
    console.log('find: ', el.discipline);
    const result = await findDiscipline(el.discipline);
    console.log('result: ', result);
    if (!result) await createDiscipline(el.discipline);
  });
  // const newTest = new Test({
  //   title: req.body.title,
  //   difficulty: req.body.difficulty,
  //   duration: req.body.duration,
  // });
  //
  // newTest
  //   .save()
  //   .then(() => {
  //     res.status(200).json('Test created');
  //   })
  //   .catch(() => {
  //     res.status(400).json('Test not created');
  //   })
  //   .finally(() => {
  //     console.log('END');
  //   });
}

module.exports = createTest;
