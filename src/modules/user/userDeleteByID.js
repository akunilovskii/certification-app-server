const User = require('../../../backup/Model');

function userDeleteByID(req, res) {
  const userId = req.params.userId;
  User.deleteOne({ _id: userId })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User delete error');
    });
}

module.exports = userDeleteByID;
