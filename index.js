//First step is always to install express
const express=require('express');
//install cookie-parser
const cookieParser=require('cookie-parser');
const port=80;
const app=express();
// import db
const db=require('./config/mongoose');
//set express router
app.use(express.urlencoded());
app.use('/',require('./routes'));

app.use(cookieParser());
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