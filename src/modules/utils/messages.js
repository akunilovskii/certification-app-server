const message = {
  success: (text = '', payload) => ({
    message: text,
    success: true,
    fail: false,
    payload,
  }),
  fail: (text = '', payload) => ({
    message: text,
    success: false,
    fail: true,
    payload,
  }),
};

module.exports = message;
