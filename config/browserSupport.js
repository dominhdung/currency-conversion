const minBrowsersVersions = {
  msie: '11',
  msedge: '11',
  safari: '9',
  chrome: '44',
  firefox: '46',
};

const browserQueryKeys = {
  msie: 'ie',
  msedge: 'Edge',
  safari: 'Safari',
  chrome: 'Chrome',
  firefox: 'Firefox',
};

exports.minBrowsersVersions = minBrowsersVersions;
exports.browserListQueries = Object.keys(minBrowsersVersions)
  .map(key => `${browserQueryKeys[key]} >= ${minBrowsersVersions[key]}`);
