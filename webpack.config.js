const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/index.ts',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './lib'),
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'rightClickMenu',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this',//全局对象配置，浏览器中是 window，Node 中是 global。如果编写的 UMD 需要兼容两种环境，定义为 this。
  },
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.vue/,
        use: [{
          loader: 'vue-loader'
        }]
      },
      {
        test: /\.(css)$/i,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
          }
        ]
      },
      {
        test: /\.(ts|js)/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-typescript"]
          }
        }]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
}