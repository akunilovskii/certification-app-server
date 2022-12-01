let count = 0;
const names = [];
function info(req, res) {
  //const a = 123;
  //const b = Math.random();
  //const c = a + b;
  //res.send('info' + c);
  const a = req.body.a;
  const b = req.body.b;
  const sum = a + b;
  names.push(req.body.name);
  //res.send('info here ');
  res.status(200).json(names);
}

module.exports = info;
