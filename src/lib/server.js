const path = require('path')
const express = require('express')
const index = '../../public/index.html'
const public = '../../public'

module.exports = {
  app: function () {
    const app = express()
    const indexPath = path.join(__dirname, index)
      const publicPath = express.static(path.join(__dirname, public))

    app.use('/public', publicPath)
    app.get('/', function (_, res) { res.sendFile(indexPath) })

    return app
  }
}
