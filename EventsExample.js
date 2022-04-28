const EventEmitter=require('events');
const customEmitter=new EventEmitter();

customEmitter.on('response',(name,id)=>{
    console.log(`${name} Developer Located At Canada!!`);
});
customEmitter.on('response',()=>{
    console.log(`Data Recived`);
});
customEmitter.emit('response','Arun',13);