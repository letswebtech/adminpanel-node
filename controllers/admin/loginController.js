exports.getLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle : 'Login',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};