const express=require('express');
const app=express();

const PORT=5000;

app.get('/user/:id',(req,res)=>{
const userId=req.params.id;
res.send(`<h1>USER PROFILE</h1><p>User ID:{userId}</p>`);
});

app.get('/flights/from/to',(req,res)=>{
    const {from,to}=req.params;
    res.send(`flights depart from <b>${from}</b> to <b>${to}</b>`);
});

app.get('/searh',(req,res)=>{
    const cat=req.query.category;
    const sort=req.query.sort;

    res.json({
        message:"Search Results",
        filteringBy:cat||"None",
        sortingBy:sort||"Default"
    });
});

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
});