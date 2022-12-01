function home(req, res) {
  // res.status(202).send('Hello!!!'); //change status and send message at one line;
  res.status(202).json({
    name: 'Mike',
    comp: [12, 56, 34, 23],
    q: true,
  });
}

module.exports = home;
