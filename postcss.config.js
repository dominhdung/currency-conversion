const atVariables = require('postcss-at-rules-variables');
const importer = require('postcss-import');
const mixins = require('postcss-mixins');
const advancedVariables = require('postcss-advanced-variables');
const customMedia = require('postcss-custom-media');
const easings = require('postcss-easings');
const customProperties = require('postcss-custom-properties');
const colorFunction = require('postcss-color-function');
const nesting = require('postcss-nesting');
const nested = require('postcss-nested');
const customSelectors = require('postcss-custom-selectors');
const propertyLookup = require('postcss-property-lookup');
const extend = require('postcss-extend');
const selectorNot = require('postcss-selector-not');
const calc = require('postcss-calc');
const responsiveType = require('postcss-responsive-type');
const discardComments = require('postcss-discard-comments');
const mergeLonghand = require('postcss-merge-longhand');
const discardUnused = require('postcss-discard-unused');
const normalizeCharset = require('postcss-normalize-charset');
const autoprefixer = require('autoprefixer');
const browserListQueries = require('./config/browserSupport').browserListQueries;

const postcssConfig = () => [
  atVariables,
  importer({
    path: ['./src', './node_modules'],
  }),
  mixins({
    mixinsDir: './src/stylesheets/mixins',
  }),
  advancedVariables,
  customMedia,
  customProperties,
  colorFunction,
  easings,
  nesting,
  nested,
  customSelectors,
  propertyLookup,
  extend,
  selectorNot,
  calc({
    mediaQueries: true,
  }),
  responsiveType,
  discardComments({
    removeAll: true,
  }),
  mergeLonghand,
  discardUnused,
  normalizeCharset,
  autoprefixer({ browsers: ['last 2 versions', ...browserListQueries] }),
];

module.exports = postcssConfig;
