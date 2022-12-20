const User = require('../../../backup/Model');

function userGetAll(req, res) {
  User.find({
    /*email: 'test3@mail.com'*/
  })
    // .limit(2)
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User get all error');
    });
}

module.exports = userGetAll;
