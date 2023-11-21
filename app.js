const express=require('express');

const server=express();
const port=4242;
server.get('/about',(req,res)=>{
    res.send('Hello World');
});

server.listen(port,()=>{
    console.log('Express Server is Running....');
});