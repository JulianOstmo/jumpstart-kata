const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { jumpstart } = require('../../src/index');
const { main } = require('../../src/jumpstart');

// const run = async (command) => exec(command);

Given('gh is installed', async function () {});

When('jumpstart function is called', async function () {
  this.actualAnswer = jumpstart();
});

Then('return true', async function () {
  assert(this.actualAnswer, true);
});

When('jumpstart --check-only is called', async function () {
  process.arg = ['--check-only'];
  //this.actualError = process.stderr;
  const options = { checkOnly: true };
  this.actualError = jumpstart(options);
});

Then('no error is thrown', async function () {
  assert(this.actualError === '');
});

Given('GH is not installed', async function () {});

When('Jumpstart function is called', async function () {});

Then('GH should be installed', async function () {
  const options = { checkOnly: true };
  this.actualError = jumpstart(options);
});
