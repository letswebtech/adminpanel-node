const User = require('../../models/UserModel');

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
    console.log(req.body);
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
    console.log(req.body);
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    console.log(req.body);

    user =  new User(null, fname, lname, email, password);
    user.save().then(()=>{
        res.render('admin/login', {
            pageTitle : 'User login',
            path : 'admin/login',
            message : 'Account Created Succesfully',
        });
    }).catch((err)=>{
        console.log(err);
    });
};