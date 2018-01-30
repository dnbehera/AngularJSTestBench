
//Custom Modules
const express = require('express');

app = express();

app.use('/', express.static(__dirname+'/public')); 
app.get('/', (req, res) =>{
    res.render('index.html');
}).listen('3000', err => console.log('App Started on 3000'));