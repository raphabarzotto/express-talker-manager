const router = require('express').Router();
const { readWriteFile } = require('../helpers/readWriteFile');

const PATH_FILE = './talker.json';

router.get('/', async (_req, res) => {
  const talkers = await readWriteFile(PATH_FILE);
  return res.status(200).json(talkers);
});

router.get('/:id', async (req, res) => {
  const talkers = await readWriteFile(PATH_FILE);
  const { id } = req.params;
  const talker = talkers.find((index) => index.id === Number(id));

  if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
});

module.exports = router;