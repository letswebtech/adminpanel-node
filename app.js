var PORT = process.env.PORT || 3000 ;

const http =  require('http');
const path =  require('path');
const express = require('express');

const bodyParser =  require('body-parser');

const admnRoutes = require('./routes/admin');

const app = express();

app.use(bodyParser.urlencoded({'extended': false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', admnRoutes);

app.get((req, res)=>{
    res.send("Page Not Found");
});

app.listen(PORT);