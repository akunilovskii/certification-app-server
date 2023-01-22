const deleteById = require('../queries/delete');

async function deleteByIdController(req, res) {
  const resultID = req.params.resultId;
  const deleteResult = await deleteById(resultID);

  if (deleteResult.success) {
    res.status(200).json(deleteResult);
  } else {
    res.status(400).json('Delete result by ID error');
  }
}

module.exports = deleteByIdController;
