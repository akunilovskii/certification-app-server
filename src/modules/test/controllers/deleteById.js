const deleteById = require('../queries/delete');

async function deleteByIdController(req, res) {
  const testID = req.params.testId;
  const deleteResult = await deleteById(testID);

  if (deleteResult.success) {
    res.status(200).json(deleteResult);
  } else {
    res.status(400).json('Delete test by ID error');
  }
}

module.exports = deleteByIdController;
