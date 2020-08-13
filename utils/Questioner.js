class Questionnaire {
  constructor(title, request, response = null) {
    this.title = title;
    this.request = request;
    this.response = response;
  }

  setResponse = data => {
    this.response = data;
  };
}

const projectTitle = new Questionnaire(
  'Project Title',
  'Please provide a project title - '
);

const gettingStarted = new Questionnaire(
  'Getting Started',
  'Please provide instructions for setup - '
);

const prerequisites = new Questionnaire(
  'Prerequisites',
  'Please provide installation instructions - '
);

const installating = new Questionnaire(
  'Installating',
  'Please provide step by step examples for how to get a development env running - '
);

const tests = new Questionnaire(
  'Tests',
  'Please explain how to run tests for this system - '
);

const e2eTestsBreakdown = new Questionnaire(
  'Breakdown into End to End Tests',
  'Please explain what these tests test and why - '
);

const deployment = new Questionnaire(
  'Deployment',
  'Please add additional notes about how to deploy this to a live system - '
);

const builtWith = new Questionnaire(
  'Built With',
  'Please include the technologies used to build this package - '
);

const contributing = new Questionnaire('Contributors', 'Add contributors - ');

const versioning = new Questionnaire('Version', 'Add version - ');

const authors = new Questionnaire('Authors', 'Add Authors - ');

const license = new Questionnaire('License', 'Add License - ');

const acknowledgement = new Questionnaire(
  'Acknowledgement',
  'Add Acknowledgement - '
);

module.exports = {
  headings: [
    projectTitle,
    gettingStarted,
    prerequisites,
    installating,
    tests,
    e2eTestsBreakdown,
    deployment,
    builtWith,
    contributing,
    versioning,
    acknowledgement,
  ],
};
