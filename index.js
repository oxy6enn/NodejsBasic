const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Hello NodeJs 55555')
    res.end()
})
server.listen(8080,'localhost',()=>{
    console.log("strat server in port 8080")
})
