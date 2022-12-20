const User = require('../../../backup/Model');

function userDeleteAll(req, res) {
  User.deleteMany()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete all error');
    });
}

module.exports = userDeleteAll;
