import 'core-js/stable'
import 'regenerator-runtime/runtime'
import server from './server'
import populate from './utils/populate'

populate(false).
  then(res => {
    server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
      console.log(`🚀  Server ready at ${url}`);
    })
  })