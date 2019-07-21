const express = require('express');

const router = express.Router();

router.get('/shop',(req, res)=>{
    res.status(200).send("Welcome to node shop");
});

module.exports = router;
