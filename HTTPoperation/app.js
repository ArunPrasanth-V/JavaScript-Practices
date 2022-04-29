const http=require('http');
const {products}=require('./data.js');
const server=http.createServer((req,res)=>{
const url=req.url;

  if(url ==='/')
  {
    res.writeHead(200,{'Content-Type':'application/json'});
    res.write(JSON.stringify(products));
    res.end();
  }
  if(url==='/:ProductId')
  {
      console.log("Hello ProductId")
      console.log(req.params);
      res.end();
  }
    
});

server.listen(8080);
