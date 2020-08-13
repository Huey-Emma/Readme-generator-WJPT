const { log, error } = console;

const fs = require('fs'),
  path = require('path'),
  readline = require('readline');

const { prompters } = require('./../utils/Questioner');
const { partial } = require('./../utils/lib');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const rline = query => {
  return new Promise((resolve, reject) => {
    rl.question(query, ans => {
      if (ans) {
        resolve(ans);
      }
    });
  });
};

const appendFileSync = (filePath, data) => {
  fs.appendFileSync(filePath, data);
};

const genFile = partial(
  appendFileSync,
  path.join(__dirname, './../', 'README.md')
);

const init = async () => {
  let ans;

  for (let i = 0; i < prompters.length; i++) {
    try {
      ans = await rline(prompters[i]['request']);
    } catch (e) {
      error(e);
    }

    prompters[i]['setResponse'](ans);
    genFile(`# ${prompters[i]['title']} \n___\n${prompters[i]['response']}\n`);
  }
  rl.close();
  log('README created!');
};

module.exports = init;
