const getByID = require('../queries/getByID');

async function getByIDController(req, res) {
  const testID = req.params.testId;
  const getResult = await getByID(testID);

  if (getResult.success) {
    res.status(200).json(getResult);
  } else {
    res.status(400).json('Get test by ID error');
  }
}

module.exports = getByIDController;
