const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // login: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  roles: [{ type: String, ref: 'Role' }],
});

module.exports = model('User', UserSchema);
