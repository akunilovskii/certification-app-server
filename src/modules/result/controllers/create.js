const create = require('../queries/create');

async function createResultController(req, res) {
  const result = req.body || req;

  const createResult = await create(result);

  if (!!res) {
    if (createResult.success) {
      res.status(200).json(createResult);
    } else {
      res.status(400).json('Result create error');
    }
  }
}

module.exports = createResultController;
