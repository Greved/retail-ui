require('ts-node').register({ files: true, transpileOnly: true });

const path = require('path');

const config = {
  gridUrl: 'http://screen-dbg:shot@grid.testkontur.ru/wd/hub',
  address: {
    host: 'localhost',
    port: 6060,
    path: '/iframe.html',
  },
  testDir: path.join(__dirname, 'tests'),
  screenDir: path.join(__dirname, 'images'),
  reportDir: path.join(__dirname, 'report'),
  maxRetries: 1,
  browsers: {
    chrome: { browserName: 'chrome', limit: 1 },
    firefox: { browserName: 'firefox', limit: 1 },
    ie11: { browserName: 'internet explorer', limit: 1 },
  },
};

module.exports = config;
