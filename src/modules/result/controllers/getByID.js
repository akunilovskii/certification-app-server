const getByID = require('../queries/getByID');

async function getByIDController(req, res) {
  const resultID = req.params.resultId;
  const getResult = await getByID(resultID);

  if (getResult.success) {
    res.status(200).json(getResult);
  } else {
    res.status(400).json('Get result by ID error');
  }
}

module.exports = getByIDController;
