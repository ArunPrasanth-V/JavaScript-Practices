const fs=require('fs');
fs.readFile('demo','utf8',(err,data)=>{
  if(err)
   console.log(err+"Error :(");  
   fs.appendFile('appendfile',data,(err)=>{
    if(err)
     console.log(err);
});
});

fs.readFile('os-module.js','utf8',(err,data)=>{
    if(err)
     console.log(err+"Error :(");  
     fs.appendFile('appendfile',data,(err)=>{
        if(err)
         console.log(err);
    });
  });

  
