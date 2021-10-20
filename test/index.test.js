const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { jumpstart } = require('../src/index');

describe('Installed packages check', () => {
  it('should return true if GH is installed', () => {
    expect(jumpstart()).toBe(true);
  });

  it.skip('should return false if GH is not installed', () => {
    exec = {stdout: 0}
    expect(jumpstart()).toBe(false);
  });
});
