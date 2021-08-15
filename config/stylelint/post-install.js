const fs = require('fs');
const path = require('path');

let rootPath = '../';
while (!fs.existsSync(path.resolve(rootPath, 'package.json'))) {
  rootPath += '../';
}
const pkgJsonPath = path.resolve(rootPath, 'package.json');

const json = require(pkgJsonPath);
const { stylelint = { extends: [] } } = json || {};
const configName = '@ria-develop/stylelint-config';
stylelint.extends = (stylelint.extends.filter((item) => item !== configName) || []).concat(configName);
fs.writeFileSync(pkgJsonPath, JSON.stringify({ ...json, stylelint }, null, 2));
