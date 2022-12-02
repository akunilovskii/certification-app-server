const mongoose = require('mongoose');
const { Schema } = mongoose;
const disciplineSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Discipline', disciplineSchema);
