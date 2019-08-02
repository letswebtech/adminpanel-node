exports.getLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle : 'Login',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};

exports.postLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle : 'Login',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};

exports.getRegister = (req, res, next) =>{
    res.render('admin/register', {
        pageTitle : 'User Registration',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};

exports.postRegister = (req, res, next) =>{
    res.render('admin/register', {
        pageTitle : 'User Registration',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};