const { log } = console;

const initApp = require('./app/app');
const { slice, partial, eq } = require('./utils/lib');

const message = () => {
  log(
    `Usage: node index [command]\n-V, --version\toutput the version number\n\nCommand(s):\ncreate\tCreate a README file`
  );
};

const parseCLIArg = partial(slice, 2, undefined);

if (eq('create', parseCLIArg(process.argv)[0])) {
  initApp();
} else {
  message();
  process.exit();
}
