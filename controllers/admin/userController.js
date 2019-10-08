const User = require('../../models/UserModel');
const path = require('../../util/path');

exports.getDashboard = (req, res, next) =>{
    const dataArr = [];
    dataArr['user'] = req.session.user;
    res.render('admin/dashboard', {
        pageTitle : 'User Dashboard',
        pathHelper:path,
        myHelper:null,
        data:dataArr
    });
};

exports.getProfileUpdate = (req, res, next) =>{
    if(req.params._id !== undefined){
        User.findById(req.params._id).then((user) => {
            if(user !== undefined){
                const dataArr = [];
                dataArr['user'] = user;
                res.render('admin/profile/update', {
                    pageTitle : 'Update Profile',
                    pathHelper:path,
                    myHelper:null,
                    data:dataArr
                });
            }
        }).catch((err) =>{
            console.log(err);
        });
    }
};

exports.postProfileUpdate = (req, res, next) =>{
    dataArr = {};
    dataArr.fname = req.body.fname;
    User.update(req.body._id, dataArr).then((response) => {
        res.json({ 
            message: 'success',
            status: 200,
            data: response
        });
    }).catch((err) =>{
        console.log(err);
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
