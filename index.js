//First step is always to install express
const express=require('express');
const port=8000;
const app=express();

app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running at: ${port}`);
});