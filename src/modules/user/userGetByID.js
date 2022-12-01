const User = require('./Model');

function userGetByID(req, res) {
  console.log(req.params.age);
  console.log(req.params.userId);

  const userId = req.params.userId;
  User.findById(userId)
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

module.exports = userGetByID;
