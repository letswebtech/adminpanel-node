var PORT = process.env.PORT || 3000 ;
const http =  require('http');
const express = require('express');

const app = express();

app.use((req, res)=>{
    res.send("MY NODE PRJECT ");
});
const server = http.createServer(app);

server.listen(PORT);