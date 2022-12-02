const mongoose = require('mongoose');
const { Schema } = mongoose;
const testSchema = new Schema({
  discipline: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discipline',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ['', 'easy', 'standard', 'hard'],
    default: '',
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  questions: [
    {
      id: {
        type: String,
        required: true,
      },
      selected: {
        type: Array,
        required: true,
      },
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          id: {
            type: String,
            required: true,
          },
          text: {
            type: String || Number,
            required: true,
          },
          correct: {
            type: String,
            required: true,
          },
        },
      ],
    },
  ],
});

module.exports = mongoose.model('Test', testSchema);
