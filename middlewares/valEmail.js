const valEmail = (req, res, next) => {
  const { email } = req.body;
// RegExr
  const re = /\S+@\S+\.com/;
  if (!email) {
    return res.status(400).json({ message: '"email" field required' });
  }
  if (!re.test(email)) {
    return res.status(400).json({ message: '"email" field must be format "email@email.com"' });
  }
  next();
};

module.exports = valEmail; 