//require library
const mongoose=require('mongoose');
//make connection
mongoose.connect('mongodb://localhost/Hello_You_db',{useNewUrlParser:true,
useUnifiedTopology:true});
//acquire the connection
const db =mongoose.connection;
//error
db.on('error',console.error.bind(console,'error connecting to db'));
//up and running then print the message
db.once('open',function(){
    console.log('Successfully connected to : Mongo db');
})