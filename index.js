const { log } = console;

const init = require('./app/app');
const { slice, partial, eq, or, join, pipe, either } = require('./utils/lib');
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

const isCreate = partial(eq, 'create');
const isV = partial(eq, '-V');
const isVersion = partial(eq, '--version');

if (isCreate(parsedCLIArg)) {
  init();
} else if (either(isV, isVersion)(parsedCLIArg)) {
  log(version);
  process.exit();
} else {
  message();
  process.exit();
}
