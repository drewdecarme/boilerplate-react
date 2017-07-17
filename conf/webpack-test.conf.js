const webpack = require('webpack');
const context = process.cwd();
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
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.inline.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'svg-react-loader', // use incase query needs to be added
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'react-hot-loader',
          'babel-loader?' + JSON.stringify({
            presets: ['es2015'],
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
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        postcss: () => [autoprefixer],
        context: context
      }
    })
  ],
  devtool: 'source-map',
  externals: {
    'react/lib/ExecutionEnvironment': 'true',
    'react/lib/ReactContext': 'true'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
};
