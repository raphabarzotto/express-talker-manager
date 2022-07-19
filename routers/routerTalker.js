const router = require('express').Router();
const { readFile, writeFile } = require('../helpers/readWriteFile');

const valToken = require('../middlewares/valToken');
const valName = require('../middlewares/valName');
const valAge = require('../middlewares/valAge');
const valTalk = require('../middlewares/valTalk');
const valWatchedAt = require('../middlewares/valWatchedAt');
const valRate = require('../middlewares/valRate');

const FILE_PATH = './talker.json';

router.get('/search', valToken, async (req, res) => {
  const { q } = req.query;
  const talkers = readFile(FILE_PATH);
  const talkersSearch = talkers.filter(({ name }) => name.includes(q.toLowerCase()));
  return res.status(200).json(talkersSearch);
});

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

router.post('/', [
  valToken, 
  valName, 
  valAge, 
  valTalk, 
  valWatchedAt, 
  valRate,
], async (req, res) => {
  const talkers = await readFile(FILE_PATH);
  const { name, age, talk } = req.body;
  talkers.push({ id: talkers.length + 1, name, age, talk });
  await writeFile(FILE_PATH, talkers);
  return res.status(201).json({ id: talkers.length, name, age, talk });
});

router.put('/:id', [
  valToken, 
  valName, 
  valAge, 
  valTalk, 
  valWatchedAt, 
  valRate,
], async (req, res) => {
  const talkers = await readFile(FILE_PATH);
  const { id } = req.params;
  const { name, age, talk } = req.body;
  const talkerId = talkers.findIndex((index) => index.id === Number(id));
  talkers[talkerId] = { name, age, id: Number(id), talk };
  await writeFile(FILE_PATH, talkers);
  return res.status(200).json(talkers.find((index) => index.id === Number(id)));
});

router.delete('/:id', valToken, async (req, res) => {
  const { id } = req.params;
  const data = await readFile(FILE_PATH);
  const talkerId = data.findIndex((index) => index.id === Number(id));
  data.splice(talkerId, 1);
  await writeFile(FILE_PATH, data);
  return res.status(204).end();
});

module.exports = router;