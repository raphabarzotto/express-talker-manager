const router = require('express').Router();
const generateToken = require('../helpers/generateToken');

router.post('/', (req, res) => {
  const { email, password } = req.body;
  console.log({ email, password });
  // console.log para passar do req 3
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = router;