// const mongoose = require('mongoose');
// const { Schema } = mongoose; //the same as -> const Schema = mongoose.schema

// const userSchema = new Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//     index: true,
//   },
//   password: {
//     type: String,
//     required: true,
//     select: false,
//   },
// });

// userSchema.index({ email: 1 }, { unique: true }); //email will be unique field

// module.exports = mongoose.model('User', userSchema);
