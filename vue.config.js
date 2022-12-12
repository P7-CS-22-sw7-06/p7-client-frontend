const { defineConfig } = require('@vue/cli-service')
var webpack = require('webpack');
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
    
    plugins: [
      new webpack.LoaderOptionsPlugin({
        //test: /\.xxx$/, // may apply this only for some modules

        resolve: {
          extensions: ['.js', '.jsx'],
          
          fallback: {
            "path": require.resolve("path-browserify"),
             "stream": false,
             "fs": false,
             "tls": false,
             "net": false
          },
          node: {
            fs: 'empty'
          }
        },
      }),
      //new NodePolyfillPlugin()
    ],
  },
})

