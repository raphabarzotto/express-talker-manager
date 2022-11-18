const valWatchedAt = (req, res, next) => {
  const { watchedAt } = req.body.talk;
// Data RegEx
  const re = /[0-9]{2}\/{1}[0-9]{2}\/{1}[0-9]{4}/;
  if (!watchedAt) {
    return res.status(400).json({ message: '"watchedAt" field required' });
  }
  if (!re.test(watchedAt)) {
    return res.status(400)
      .json({ message: '"watchedAt" field must be format "dd/mm/yyyy"' });
  } 
  next();
};

module.exports = valWatchedAt; 