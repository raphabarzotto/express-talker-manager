const fs = require('fs').promises;

const readFileContent = async (path) => {
  try {
    const content = await fs.readFile(path, 'utf8');
    return JSON.parse(content);
  } catch (error) {
    return null;
  }
};

const writeContentFile = async (path, content) => {
  try {
    const arrContent = await readFileContent(path) || [];

    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));

    return content;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  readFileContent,
  writeContentFile,
}; 