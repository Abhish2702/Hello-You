const User=require('../models/user');
// module.exports.profile=function(req,res){
//     if(req.cookies.user_id){
//     User.findById(req.cookies.user_id,function(err,user){
//         if(err){
//             console.log('Error in finding user',err);
//             return;
//         }
//         if(user){
//             return res.render('profile',{
//                 title:profile,
//                 user:user
//             })
//         }
//         else{
//             return res.redirect('/sign-in');
//         }
//     })
// }
// else{
//     return res.redirect('/sign-in');
// }
// }