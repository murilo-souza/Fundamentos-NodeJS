import http from 'node:http'

const server = http.createServer((req, res)=>{
  const {method, url} = req

  if(method === 'GET' && url === '/users'){
    return res.end('Listagem de usuario')
  }
  
  if(method === 'GET' && url === '/users'){
    return res.end('Listagem de usuario')
  }
  
  return res.end('Hello World')
})

server.listen(3333)