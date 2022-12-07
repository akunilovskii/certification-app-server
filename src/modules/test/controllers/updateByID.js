const updateById = require('../queries/updateByID');

async function updateByIDController(req, res) {
  const testID = req.params.testId;
  const data = req.body.data.test;

  const updateResult = await updateById(testID, data);

  if (updateResult.success) {
    res.status(200).json(updateResult);
  } else {
    res.status(400).json('Test create error');
  }
}

module.exports = updateByIDController;
