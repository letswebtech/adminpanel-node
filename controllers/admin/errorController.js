exports.page404 = (req, res, next) =>{
    res.render('page404', {
        pageTitle : 'PAGE NOT FOUND',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};

exports.login = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle : 'Login',
        path : 'admin/login',
        infoMessage : '',
        infoClass : ''
    });
};