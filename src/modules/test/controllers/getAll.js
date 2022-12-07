const getAll = require('../queries/getAll');

async function getAllController(req, res) {
  const getResult = await getAll();

  if (getResult.success) {
    res.status(200).json(getResult);
  } else {
    res.status(400).json('Get all tests error');
  }
}

module.exports = getAllController;
