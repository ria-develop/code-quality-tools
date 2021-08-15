const fs = require('fs');
const path = require('path');

let rootPath = '../';
while (!fs.existsSync(path.resolve(rootPath, 'package.json'))) {
  rootPath += '../';
}
const pkgJsonPath = path.resolve(rootPath, 'package.json');
const json = require(pkgJsonPath);
const { jest = {} } = json || {};
jest.preset = '@ria-develop/jest-preset';
fs.writeFileSync(pkgJsonPath, JSON.stringify({ ...json, jest }, null, 2));
