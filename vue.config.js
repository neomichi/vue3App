const fs = require('fs')
const path = require('path')
const srcPath=path.resolve(__dirname,'src')

module.exports = {
    devServer: {
        https: {
          key: fs.readFileSync('./localhost.key.pem'),
          cert: fs.readFileSync('./localhost.pem'),
        },
        public: 'https://localhost:8080/'
    },
   // publicPath: process.env.NODE_ENV === 'production'
}