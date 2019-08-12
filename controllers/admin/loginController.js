const User = require('../../models/UserModel');

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
        console.log(user);
        if(user){
            res.render('admin/dashboard', {
                pageTitle : 'Dashboard',
                path : 'admin/dashboard',
                infoMessage : 'Welcome!',
                infoClass : 'success',
                data: user
            });
        }else{
            res.render('admin/login', {
                pageTitle : 'Login',
                path : 'admin/login',
                infoMessage : 'Invalid email/password',
                infoClass : 'error'
            });
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
        res.render('admin/login', {
            pageTitle : 'Login',
            path : 'admin/login',
            infoMessage : 'Account Created Succesfully',
            infoClass : "success"
        });
    }).catch((err)=>{
        console.log(err);
    });
};