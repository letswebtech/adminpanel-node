exports.isAuth = (req, res, next) =>{
    if(req.session.user === undefined){
        res.redirect(302, '/admin/login');
    }else{
        next();
    }
};