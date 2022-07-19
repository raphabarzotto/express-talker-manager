const router = require('express').Router();
const { readFile } = require('../helpers/readFile');

const FILE_PATH = './talker.json';

router.get('/', async (_req, res) => {
  const talkers = await readFile(FILE_PATH);
  return res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const talkers = await readFile(FILE_PATH);
  const { id } = req.params;
  const talker = talkers.find((index) => index.id === Number(id));

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
});

module.exports = router;