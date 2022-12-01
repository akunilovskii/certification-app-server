const User = require('./Model');

function userUpdateByID(req, res) {
  const userId = req.params.userId;
  delete req.body.password; // delete field 'password' from request for security
  // delete req.body.roles; // delete field 'roles' from request

  User.updateOne({ _id: userId }, req.body)
    // .limit(2)
    // .skip(1)
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json('User update error');
    });

  // User.findByIdAndUpdate(userId, req.body)
  //   // .limit(2)
  //   // .skip(1)
  //   .exec()
  //   .then((result) => {
  //     res.status(200).json(result);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(400).json('User update error');
  //   });
}

module.exports = userUpdateByID;
