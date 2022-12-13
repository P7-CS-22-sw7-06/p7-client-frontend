const { defineConfig } = require('@vue/cli-service')
//const fs = require('fs')
const webpack = require('webpack');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({  
  chainWebpack: config => {
    config.plugin('polyfills').use(NodePolyfillPlugin),
    node = {
      fs: 'empty',
      tls: 'empty'
    }
  
  },
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
        tls: false,
        net: false
      }
    },
    
    plugins: [
      new webpack.LoaderOptionsPlugin({
        //test: /\.xxx$/, // may apply this only for some modules
      }),
      //new NodePolyfillPlugin()
    ],
  },
})

