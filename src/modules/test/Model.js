const mongoose = require('mongoose');
const { Schema } = mongoose;

const AnswerSchema = new Schema({
  text: {
    type: String || Number,
    required: true,
  },
  correct: {
    type: Boolean,
    required: true,
  },
});

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  shouldSelect: {
    type: Number,
    required: true,
  },
  answers: [AnswerSchema],
});

const TestSchema = new Schema(
  {
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    discipline: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Discipline',
      required: true,
    },
    subject: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Subject',
      required: true,
    },
    level: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Level',
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
    questions: [QuestionSchema],
  },
  { timestamps: {}, versionKey: false },
);

module.exports = mongoose.model('Test', TestSchema);
