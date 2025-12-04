require('dotenv').config()

const startServer = require('./server')

const PORT = process.env.PORT || 4000

const main = () => {
  startServer(PORT)
}

main()
