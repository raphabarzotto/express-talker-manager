const valAge = (req, res, next) => {
  const { age } = req.body;
  if (!age) {
    return res.status(400).json({ message: '"age" field required' });
  } 
  if (age < 18) {
    return res.status(400).json({ message: 'Speaker must be over 18' });
  }
  next();
};

module.exports = valAge; 