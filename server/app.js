var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var cors = require('cors');
var logger = require('morgan');


mongoose.connect(" mongodb://127.0.0.1:27017/Fashionista_db",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected Successfully!!') })
    .catch((error) => { console.log(error) });

    
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');


    var corsOptions = {
        origin: "http://localhost:4200"
    };

var app = express();

app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);

module.exports = app;
