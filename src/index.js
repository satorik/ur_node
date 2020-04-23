import 'core-js/stable'
import 'regenerator-runtime/runtime'
import server from './server'
import populate from './utils/populate'

require('@google-cloud/debug-agent').start()

require('dotenv').config()

populate(false).
  then(res => {
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
  })