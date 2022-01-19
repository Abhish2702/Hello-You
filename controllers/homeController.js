module.exports.home=function(req,res){
    return res.render('home',{
        title:"Home"
    })
}
module.exports.create=function(req,res){
    res.end(
        '<h1>esdfa</h1>'
    );
}