const Test = require('../Model');
const updateById = require('../queries/updateByID');

async function updateByIDController(req, res) {
  const testID = req.params.testId;
  const data = req.body.data.test;
  console.log('res: ', res);
  res = await updateById(testID, data);
}

module.exports = updateByIDController;
