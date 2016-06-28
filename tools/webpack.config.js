const path = require('path');
const webpack = require('webpack');
const extend = require('extend');
const pkg = require('../package.json');

const isDebug = !(process.argv.includes('--release') || process.argv.includes('-r'));
const isVerbose = process.argv.includes('--verbose') || process.argv.includes('-v');

const config = {

  context: path.resolve(__dirname, '../'),

  entry: ['./core/app.js'],

  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/',
    file: 'build/[name].js',
    sourcePrefix: '  ',
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },

  debug: isDebug,

  devtool: isDebug ? 'source-map' : false,

  stats: {
    colors: true,
    reasons: isDebug,
    hash: isVerbose,
    version: isVerbose,
    timings: true,
    chunks: isVerbose,
    chunkModules: isVerbose,
    cached: isVerbose,
    cachedAssets: isVerbose,
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isDebug ? '"development"' : '"production"',
      __DEV__: isDebug,
    }),
  ],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, '../components'),
          path.resolve(__dirname, '../core'),
          path.resolve(__dirname, '../routes'),
        ],
        loader: 'babel-loader',
        query: extend({}, pkg.babel, { babelrc: false }),
      },
      {
        test: /\.css/,
        loaders: [
          'style-loader',
          `css-loader?${JSON.stringify({
            sourceMap: isDebug,
            modules: true,
            localIdentName: isDebug ? '[name]_[local]_[hash:base64:3]' : '[hash:base64:4]',
            minimize: !isDebug,
          })}`,
          'postcss-loader',
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.md$/,
        loader: path.resolve(__dirname, './webpack.markdown-loader.js'),
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader?limit=10000',
      },
      {
        test: /\.(eot|ttf|wav|mp3)$/,
        loader: 'file-loader',
      },
    ],
  },
  postcss(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('postcss-for')(),
      require('postcss-simple-vars')(),
      require('postcss-custom-media')(),
      require('postcss-media-minmax')(),
      require('postcss-custom-selectors')(),
      require('postcss-calc')(),
      require('postcss-nesting')(),
      require('postcss-color-function')(),
      require('pleeease-filters')(),
      require('pixrem')(),
      require('postcss-selector-matches')(),
      require('postcss-selector-not')(),
      require('autoprefixer')(),
      require('postcss-modules-local-by-default')(),
    ];
  },

};

// Optimize the bundle in release (production) mode
if (!isDebug) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({ compress: { warnings: isVerbose } }));
  config.plugins.push(new webpack.optimize.AggressiveMergingPlugin());
}

module.exports = config;
