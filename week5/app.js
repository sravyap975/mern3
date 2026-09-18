const express = require('express');
const app=express();

const PORT=3000;

app.get('/',(req,res)=>{
res.send('<h1>Welcome,This is home page</h1>');
});

app.get('/about',(req,res)=>{
    res.send('This is about page');
});

app.get('/api/status',(req,res)=>{
    res.json({
        active:true,
        version:"1.0.0",
        message:"The server is healthy and responding!"
    });
});

app.listen(PORT,()=>{
    console.log(`Success!Server is running at http://localhost:${PORT}`);
});