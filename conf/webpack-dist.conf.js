const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');
const context = process.cwd();

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const pkg = require('../package.json');
const autoprefixer = require('autoprefixer');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoader: 1,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
              }
            },
            'sass-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: function(modulePath) {
          return /node_modules/.test(modulePath) &&
              !/node_modules\/postcss-modules-values/.test(modulePath) &&
              !/node_modules\/postcss-modules-scope/.test(modulePath) &&
              !/node_modules\/postcss-modules-local-by-default/.test(modulePath) &&
              !/node_modules\/postcss-modules-extract-imports/.test(modulePath) &&
              !/node_modules\/postcss-scss/.test(modulePath) &&
              !/node_modules\/babel-plugin-react-css-modules/.test(modulePath);
        },
        use: [
          'babel-loader?' + JSON.stringify({
            plugins: [
              'transform-react-jsx',
              [
                'react-css-modules',
                {
                  context
                }
              ]
            ]
          })
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      output: {
        comments: false
      },
      compress: {
        unused: true,
        dead_code: true,
      }
    }),
    new ExtractTextPlugin('index-[contenthash].css'),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor'}),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: () => [autoprefixer],
        context: context
      }
    })
  ],
  node: {
     fs: "empty"
  },
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name]-[hash].js'
  },
  entry: {
    app: `./${conf.path.src('index')}`,
    vendor: Object.keys(pkg.dependencies)
  }
};
