#! /usr/bin/env node

'use strict';

const path = require('path');
const cpy = require('cpy');

const componentName = path.basename(process.cwd());
const outputPath = `bower_components/${componentName}`;
const sources = [
  '*.{js,html}',
  '!index.html',
  'demo/**/*',
  'locales/*'
];

(async () => {
  await cpy(sources, outputPath, { parents: true });
  console.log('Files copied!');
})();
