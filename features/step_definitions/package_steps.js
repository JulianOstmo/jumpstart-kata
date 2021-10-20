const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { jumpstart } = require('../../src/index');

const run = async (command) => exec(command);

Given('gh is installed', async () => {});

When('jumpstart function is called', async () => {
  this.actualAnswer = jumpstart();
});

Then('return true', async () => {
  assert(this.actualAnswer, true);
});

When('jumpstart --check-only is called', async () => {
  const result = await run('src/jumpstart --check-only');
  this.actualError = result.stderr;
});

Then('no error is thrown', async () => {
  assert(this.actualError === '');
});
