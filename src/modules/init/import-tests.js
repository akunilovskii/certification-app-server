const createTest = require('../../modules/test/controllers/create');

const tests = require('./tests-list');

// IMPORT DATA INTO DATABASE
async function importData(userId) {
  for (const test of tests) {
    await createTest({ ...test, owner: userId });
  }
}

module.exports = importData;
