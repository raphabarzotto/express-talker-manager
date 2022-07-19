const valEmail = (req, res, next) => {
  const { email } = req.body;
// RegExr
  const re = /\S+@\S+\.com/;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!re.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = valEmail; 