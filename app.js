var PORT = process.env.PORT || 3000 ;

//imports
const http =  require('http');
const path =  require('path');
const rootDir = require('./util/path');
const express = require('express');
const bodyParser =  require('body-parser');
const admnRoutes = require('./routes/admin');
const errorController = require('./controllers/admin/errorController');
const app = express();

//template engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//utils and heplers
app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static(path.join(rootDir, 'public')))

//routes
app.use('/admin', admnRoutes);
app.use(errorController.page404);

//server
app.listen(PORT);