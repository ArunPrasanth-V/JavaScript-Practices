const http=require('http');
http.createServer((req,res)=>{
  if(req.url==='/')
  res.end("Welcome to Canada!!");
  if(req.url==='/home')
  res.end("You're DevOps Engineer now!!");

  res.end(`
   <h1>Sorry, 404 Error</h1>
   <a href="/">"Return To Home"</a>
  `);

}).listen(8080);