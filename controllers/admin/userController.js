exports.getRegister = (req, res, next) =>{
    res.render('admin/register', {
        pageTitle : 'User Registration',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};

exports.getDashboard = (req, res, next) =>{
    res.render('admin/dashboard', {
        pageTitle : 'User Dashboard',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};