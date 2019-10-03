exports.isAuth = (req, res, next) =>{
    console.log('SESSION :');
    console.log(req.session.user);
    if(req.session.user === undefined){
        res.redirect(302, '/admin/login');
    }else{
        next();
    }
};