function apiNotFound(req, res) {
  res.status(400); //set status of responding as 400
  res.send('API not found');
}

function errorHandler(app) {
  app.use(apiNotFound);
}

module.exports = errorHandler;
