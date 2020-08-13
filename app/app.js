const { log, error } = console;

const fs = require('fs'),
  path = require('path'),
  readline = require('readline');

const { headings } = require('./../utils/Questioner');
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

const genFile3 = partial(
  appendFileSync,
  path.join(__dirname, './../', 'README.md')
);

const init = async () => {
  let ans;
  try {
    for (let i = 0; i < headings.length; i++) {
      ans = await Promise.all([rline(headings[i]['request'])]);
      headings[i]['setResponse'](ans);
      genFile3(`# ${headings[i]['title']} \n${headings[i]['response']}\n`);
    }
  } catch (e) {
    error(e);
  }
  rl.close();
};

init();

rl.on('close', () => {
  log('README created!');
});
