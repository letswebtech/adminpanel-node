const User = require('../../models/UserModel');
const baseUrl = require('../../util/path').baseUrl;

exports.getLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle : 'Login',
        path : 'admin/login',
        infoMessage : '',
        infoClass : ''
    });
};

exports.postLogin = (req, res, next) =>{
    const email = req.body.email; 
    const password = req.body.password;
    User.login(email, password).then((user)=>{
        console.log(baseUrl('admin/dashboard'));
        if(user){
            res.redirect(302, baseUrl('admin/dashboard'));
        }else{
            res.redirect(302, baseUrl('admin/login'));
        }
    }).catch((err)=>{
        console.log(err);
    });
};

exports.getRegister = (req, res, next) =>{
    res.render('admin/register', {
        pageTitle : 'Register',
        path : 'admin/register',
        infoMessage : '',
        infoClass : ''
    });
};

exports.postRegister = (req, res, next) =>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const password = req.body.password;
    user =  new User({ 
        fname: fname,
        lname: lname,
        email: email,
        password: password,   
    });
    user.save().then(()=>{
        res.redirect(200, 'admin/login');
    }).catch((err)=>{
        console.log(err);
    });
};
