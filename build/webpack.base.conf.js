'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  //入口文件entry
  entry: {
    app: './src/main.js'
  },
  //输出文件output
  //config的配置在config/index.js文件中
  output: {
    path: config.build.assetsRoot,              //导出目录的绝对路径
    filename: '[name].js',                      //导出文件的文件名
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  //文件解析resolve  主要设置模块如何被解析。
  resolve: {
    extensions: ['.js', '.vue', '.json'],      //自动解析确定的拓展名,使导入模块时不带拓展名
    alias: {                                   // 创建import或require的别名
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  //模块解析module  如何处理项目不同类型的模块。
  module: {
    rules: [
      {
        test: /\.vue$/,                       // vue文件后缀
        loader: 'vue-loader',                 //使用vue-loader处理
        //options: vueLoaderConfig            //options是对vue-loader做的额外选项配置
        options:{
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.js$/,                       // js文件后缀
        loader: 'babel-loader',              //使用babel-loader处理
        include: [resolve('src'), resolve('test')] //必须处理包含src和test文件夹
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,  //图片后缀
        loader: 'url-loader',                   //使用url-loader处理
        // query是对loader做额外的选项配置 注: 关于query 仅由于兼容性原因而存在。请使用 options 代替。
        options: {
          limit: 10000,                        //图片小于10000字节时以base64的方式引用
          name: utils.assetsPath('img/[name].[hash:7].[ext]') //文件名为name.7位hash值.拓展名
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, 
        loader: 'url-loader',                              
        options: {
          limit: 10000,                                         
          name: utils.assetsPath('media/[name].[hash:7].[ext]') 
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,  //字体文件
        loader: 'url-loader',                    //使用url-loader处理
        options: {
          limit: 10000,                          //字体文件小于1000字节的时候处理方式
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')  //文件名为name.7位hash值.拓展名
        }
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  },
  //高德地图
  externals: {
    'AMap': 'AMap',
  },
}
