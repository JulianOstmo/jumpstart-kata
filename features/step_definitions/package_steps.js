const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);

const SUCCESS = 0;

const runFile = async (file) => execFile(file);

Given('gh is installed', async () => {});

When('jumpstart() is called', async () => {
  this.actualAnswer = jumpstart();
});

When('jumpstart --check-only is called', async () => {
  const result = await runFile('./src/jumpstart --check-only');
  this.actualAnswer = result.stdout;
});

Then('return 0', async () => {
  assert(this.actualAnswer, SUCCESS);
});
