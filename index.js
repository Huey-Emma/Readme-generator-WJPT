const { log } = console;

const init = require('./app/app');
const { slice, partial, eq, or, join, pipe } = require('./utils/lib');
const { version } = require('./package.json');

const message = () => {
  log(
    `Usage: node index [command]\n-V, --version\toutput the version number\n\nCommand(s):\ncreate\tCreate a README file`
  );
};

const sliceList = partial(slice, 2, undefined);
const joinItems = partial(join, '');

const parseCLIArg = pipe(sliceList, joinItems);
const parsedCLIArg = parseCLIArg(process.argv);

if (eq('create', parsedCLIArg)) {
  init();
} else if (or(eq('-V', parsedCLIArg), eq('--version', parsedCLIArg))) {
  log(version);
  process.exit();
} else {
  message();
  process.exit();
}
