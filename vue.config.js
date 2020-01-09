const webpack = require('webpack')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const productionGzipExtensions = ['js', 'css']
let target = ''
if (process.env.NODE_ENV === 'yeah') {
  // 本地局域网环境
  target = process.env.API_TARGET
} else {
  // dev-proxy target
  target = 'http://192.168.20.153:8000/'
}

let path = require('path')
const resolve = dir => path.join(__dirname, dir)
module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      sass: {
        // @/ 是 src/ 的别名
        data: `@import "@/styles/color.scss";
               @import "@/styles/mixins.scss";`
      }
    }
  },
  // Vue CLI 会假设应用是被部署在一个域名的根路径上，例如 https://www.app.com/。
  // 如果应用被部署在一个子路径上，例如https://www.app.com/me/
  // 则设置 publicPath 为 /me/
  publicPath: process.env.NODE_ENV === 'production' ? '/office-next-preview/' : '/',
  configureWebpack: {
    optimization: {
      minimize: process.env.NODE_ENV === 'production',
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            warnings: false,
            parallel: true,
            compress: {
              drop_console: true,
              drop_debugger: false,
              pure_funcs: ['console.log']
            },
            sourceMap: false
          }
        })
      ]
    },
    plugins: [
      new CompressionWebpackPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
        threshold: 10240,
        minRatio: 0.8
      })
    ]
  },
  devServer: {
    port: '9527',
    disableHostCheck: true,
    // 采用内网穿透时，前端起的两个服务器，其中生产环境下不需要热编译
    hot: process.env.NODE_ENV !== 'production',
    compress: true,
    proxy: {
      '/api': {
        target: target,
        // secure: false,
        changeOrigin: true,
        pathRewrite: {
          '^/api': 'v1'
        }
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/svg'))
      .end()

    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: '[name]'
      })
    config
      .plugin('context')
      .use(webpack.ContextReplacementPlugin, [/moment[/\\]locale$/, /zh-cn/])
  }
}
