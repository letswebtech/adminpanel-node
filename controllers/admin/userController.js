exports.getDashboard = (req, res, next) =>{
    res.render('admin/dashboard', {
        pageTitle : 'User Dashboard',
        path : '#',
        formsCss : true,
        productCss : true,
        activeAddproduct : true
    });
};