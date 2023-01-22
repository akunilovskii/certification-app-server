const getAll = require('../queries/getAll');

async function getAllController(req, res) {
  const userId = req.user.id;
  console.log({ userId });
  const getResults = await getAll(userId);

  if (getResults.success) {
    res.status(200).json(getResults);
  } else {
    res.status(400).json('Get all results error');
  }
}

module.exports = getAllController;
