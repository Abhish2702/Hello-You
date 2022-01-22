const User=require('../models/user');

module.exports.home=function(req,res){
    console.log("home called");
    return res.render('home',{
        title:"Home"
    })
}

module.exports.signUp=function(req,res){
    res.render('sign-up',{
        title:"Sign-Up"
    });
}

module.exports.Create=function(req,res){
    console.log("create called");
    if(req.body.conf_password!=req.body.password){
        return res.redirect('back');
    }
    
       User.findOne({email:req.body.email},function(err,user){
           if(err){
               console.log("Error in finding the user",err);
               return;
           }
           if(!user){
               User.create({
                   email:req.body.email,
                   password:req.body.password,
                   name:req.body.name
               },function(err,newuser){
                   if(err){
                       console.log("Error in creating user",err);
                       return;
                   }
                   return res.redirect('/');
               })
           }
           else{
               return res.redirect('back');
           }
       }) 
    
}