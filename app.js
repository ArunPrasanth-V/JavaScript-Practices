const http = require('http');

const server=http.createServer();

server.on('request',(req,res)=>{
    res.end("Welcome To Canada");
    console.log("Yeah!! You did it!! BRO")
});
server.listen(8080);