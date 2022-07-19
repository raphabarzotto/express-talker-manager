const fs = require('fs').promises;

const readFile = require("./readFile")

const writeFile = async (path, content) => {
  try {
    const arrContent = await readFile(path) || [];

    arrContent.push(content);
    await fs.writeFile(path, JSON.stringify(arrContent));

    return content;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

module.exports = {
  writeFile,
}; 