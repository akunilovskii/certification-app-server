const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Test = require('../src/modules/test/Model');
const createTest = require('../src/modules/test/controllers/create');

dotenv.config({ path: '../.env' });

const DB = process.env.MONGODB_REMOTE;

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

// READ FILE

const tests = JSON.parse(fs.readFileSync('tests-list.json', 'utf-8'));

// IMPORT DATA INTO DATABASE

const importData = async () => {
  for (const test of tests) await createTest(test);
  process.exit();
};

// const importData = async () => {
//   try {
//     await Test.create(tests);
//     console.log('Data successfully loaded');
//   } catch (error) {
//     console.log(error);
// process.exit();
//   }
// };

// DELETE ALL DATA FROM COLLECTION
const deleteData = async () => {
  try {
    await Test.deleteMany();
    console.log('Data successfully deleted');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
