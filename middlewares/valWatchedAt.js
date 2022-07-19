const valWatchedAt = (req, res, next) => {
  const { watchedAt } = req.body.talk;
// RegEx de data
  const re = /[0-9]{2}\/{1}[0-9]{2}\/{1}[0-9]{4}/;
  if (!watchedAt) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!re.test(watchedAt)) {
    return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  } 
  next();
};

module.exports = valWatchedAt; 