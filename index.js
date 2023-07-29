const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const app = express();
const port = 8002 ;

const path = require('path');
const db = require('./config/mongoose');

app.use(express.urlencoded({extended: true}));
app.use(express.static('assets'));
app.use('/media/movieimage', express.static('media/movieimage'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',require('./routes/movieRoutes'));


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});