const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const util = require('util');
const execFile = util.promisify(require('child_process').execFile);
const { jumpstart } = require('../../src/index');

const runFile = async (file) => execFile(file);

Given('gh is installed', async () => {});

When('jumpstart function is called', async () => {
  this.actualAnswer = jumpstart();
});

When('jumpstart --check-only is called', async () => {
  const result = await runFile('./src/jumpstart --check-only');
  this.actualAnswer = result.stdout;
});

Then('return true', async () => {
  assert(this.actualAnswer, true);
});
