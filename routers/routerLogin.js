const router = require('express').Router();
const generateToken = require('../helpers/generateToken');
const valEmail = require('../middlewares/valEmail');
const valPassword = require('../middlewares/valPassword');

router.post('/', [valEmail, valPassword], (_req, res) => {
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = router;