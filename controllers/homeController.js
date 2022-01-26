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
module.exports.CreateSession=function(req,res){
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log("Error in signing in",err);
            return;
        }
        if(user){
            if(user.password!=req.body.password){
                return res.redirect('back');
            }
            res.cookie('user_id',user.id);
            return res.redirect('/profile');
        }
        else{
            return res.redirect('back');
        }
    })
}
module.exports.profile=function(req,res){
    if(req.cookies.user_id){
    User.findById(req.cookies.user_id,function(err,user){
        if(err){
            console.log('Error in finding user',err);
            return;
        }
        if(user){
            return res.render('profile',{
                title:profile,
                user:user
            })
        }
        else{
            return res.redirect('/sign-in');
        }
    })
}
else{
    return res.redirect('/sign-in');
}
}