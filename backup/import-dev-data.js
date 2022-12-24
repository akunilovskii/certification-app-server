const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Test = require('../src/modules/test/Model');
const getLevelID = require('../src/modules/level/controllers/getID');
const getDisciplineID = require('../src/modules/discipline/controllers/getID');
const getSubjectID = require('../src/modules/subject/controllers/getID');
const createTest = require('../src/modules/test/queries/create');

dotenv.config({ path: '../.env' });

const DB = process.env.MONGODB_REMOTE;

mongoose
  .connect(DB,
    //   {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
const tests = JSON.parse(
  fs.readFileSync(`tests-list.json`, 'utf-8'),
);

// IMPORT DATA INTO DATABASE

const importData = () => {
  tests.forEach(async (test) => {
    const level = await getLevelID(test.level);
    const discipline = await getDisciplineID(test.discipline);
    const subject = await getSubjectID(test.subject);

    const createResult = await createTest({
      discipline,
      level,
      subject,
      title: test.title,
      difficulty: test.difficulty,
      duration: +test.duration,
      questions: test.questions,
    });
  });
};


// const importData = async () => {
//   try {
//     await Test.create(tests);
//     console.log('Data successfully loaded');
//   } catch (error) {
//     console.log(error);
//   }
//   process.exit();
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

console.log(process.argv);
