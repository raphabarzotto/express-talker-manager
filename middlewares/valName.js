const valName = (req, res, next) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" field required' });
  } 
  if (name.length < 3) {
    return res.status(400).json({ message: '"name" must be at least 3 characters long' });
  }
  next();
};

module.exports = valName; 