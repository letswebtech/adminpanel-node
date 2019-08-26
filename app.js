var PORT = process.env.PORT || 3000 ;

//imports
const http =  require('http');
const path =  require('path');
const rootDir = require('./util/path').rootDir;
const express = require('express');
const bodyParser =  require('body-parser');
const admnRoutes = require('./routes/admin');
const errorController = require('./controllers/admin/errorController');
const mongoConnect = require('./util/database').mongoConnect;
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const app = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://letswebtech:rhl2neOzmdarWBlh@cluster0-bs3pu.mongodb.net/firstApp?retryWrites=true',
    collection: 'sessions'
});
//template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//utils and heplers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static(path.join(rootDir, 'public')));
app.use(session({
    secret:'my sercret',
    resave:false,
    saveUninitialized:false,
    store:store,
}));
//routes
app.use('/admin', admnRoutes);
app.get('/', errorController.login);
app.use(errorController.page404);

//create table and run server
mongoConnect(() => {
    app.listen(PORT);
})
