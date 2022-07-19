const fs = require('fs').promises;

const readFile = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

// arrumado com ajuda
const writeFile = async (path, content) => {
  try {
    await fs.writeFile(path, JSON.stringify(content));
  } catch (error) {
    return null;
  }
};

module.exports = {
  readFile,
  writeFile,
};