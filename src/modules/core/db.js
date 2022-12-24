// getting-started.js
const mongoose = require('mongoose');

function dbConnect() {
  main().catch((err) => console.log(err));

  async function main() {
    // await mongoose.connect('mongodb://localhost/certification_app');
    await mongoose.connect(process.env.MONGODB_REMOTE);
  }
}

/*function dbConnect() {
  mongoose.connect('mongodb://localhost/express');

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', () => {
    console.log('CONNECTED');
  });
}*/

module.exports = dbConnect;
