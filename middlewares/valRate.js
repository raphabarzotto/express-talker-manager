const valRate = (req, res, next) => {
  const { rate } = req.body.talk;
  if (rate < 1 || rate > 5) {
    return res.status(400).json({ message: '"rate" must be an integer between 1 and 5' });
  } 
  if (!rate) {
    return res.status(400).json({ message: '"rate" field required' });
  }
  next();
};

module.exports = valRate; 