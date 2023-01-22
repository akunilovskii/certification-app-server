const mongoose = require('mongoose');
const { Schema } = mongoose;

const ResultSchema = new Schema(
  {
    test: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Test',
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    questions: [
      {
        title: {
          type: String,
          required: true,
        },
        answer: [
          {
            type: String,
            required: true,
          },
        ],
        correct: {
          type: Boolean,
          required: true,
        },
      },
    ],
  },
  { timestamps: {}, versionKey: false },
);

module.exports = mongoose.model('Result', ResultSchema);
