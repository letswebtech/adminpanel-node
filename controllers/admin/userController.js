const path = require('../../util/path');

exports.getDashboard = (req, res, next) =>{
    res.render('admin/dashboard', {
        pageTitle : 'User Dashboard',
        pathHelper:path,
        myHelper:null,
        data:null
    });
};
exports.getNavigation = (req, res, next) =>{
    res.render('admin/navigation', {
        pageTitle : 'User Navigation',
        pathHelper:path,
        myHelper:null,
        data:null
    });
}
exports.createNavigation = (req, res, next) =>{
    res.json({ 
        message: 'success',
        status: 200,
        data: null
    });
}
