//First step is always to install express
const express=require('express');
const port=8000;
const app=express();
//set express router
app.use('/',require('./routes'));

//install ejs
//setup views engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
        return;
    }
    console.log(`Server is running at: ${port}`);
});