const validPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: '"password" field required' });
  }
  if (password.length < 6) {
    return res.status(400).json({ message: '"password" must be at least 6 characters longs' });
  }
  next();
};

module.exports = validPassword; 