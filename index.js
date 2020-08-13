const { log } = console;

const init = require('./app/app');
const { slice, partial, eq, or, join, pipe } = require('./utils/lib');
const { version } = require('./package.json');

const message = () => {
  log(
    `Usage: node index [command]\n-V, --version\toutput the version number\n\nCommand(s):\ncreate\tCreate a README file`
  );
};

const sliceArgv = partial(slice, 2, undefined);
const joinCLIArgs = partial(join, '');

const parsedCLIArg = pipe(sliceArgv, joinCLIArgs)(process.argv);

if (eq('create', parsedCLIArg)) {
  init();
} else if (or(eq('-V', parsedCLIArg), eq('--version', parsedCLIArg))) {
  log(version);
  process.exit();
} else {
  message();
  process.exit();
}
