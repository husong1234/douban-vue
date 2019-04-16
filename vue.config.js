module.exports = {
  devServer: {
    proxy: {
      '/api' :{
        target:'https://m.douban.com',
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
