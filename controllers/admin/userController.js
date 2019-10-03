const path = require('../../util/path');

exports.getDashboard = (req, res, next) =>{
    res.render('admin/dashboard', {
        pageTitle : 'User Dashboard',
        pathHelper:path,
        myHelper:null,
        data:null
    });
};

exports.getProfileUpdate = (req, res, next) =>{
    console.log('in');
    res.render('admin/profile/update', {
        pageTitle : 'Update Profile',
        pathHelper:path,
        myHelper:null,
        data:null
    });
};

exports.postProfileUpdate = (req, res, next) =>{
    console.log('in');
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
