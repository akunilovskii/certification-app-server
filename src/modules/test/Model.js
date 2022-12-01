const mongoose = require('mongoose');
const { Schema } = mongoose;
const testSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['', 'easy', 'standard', 'hard'],
    default: '',
  },
  duration: {
    type: Number,
  },
  // questions: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Question',
  //     required: false,
  //   },
  // ],
});

module.exports = mongoose.model('Test', testSchema);
