var PORT = process.env.PORT || 3000 ;
const http =  require('http');

const bodyParser =  require('body-parser');

const express = require('express');

const app = express();

app.get('/add-product',(req, res)=>{
    
    res.status(200).send('<form method="POST" action="/add-product"><input type="text" name="message"/><button>Submit</button></form>');
});

app.post('/add-product',(req, res)=>{
    console.log('Data send');
    res.send("Data Saved");
});

app.get('/',(req, res)=>{
    res.status(404).send("Page Not Found");
});

const server = http.createServer(app);

server.listen(PORT);