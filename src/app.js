
const colors = require('colors');
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();

//Connecting to DB:

mongoose.connect('mongodb://localhost/crud-mongo', { useNewUrlParser: true })
.then(db => console.log('Db connected'.cyan))
.catch(err => console.log(err));


//Importing routes:
const indexRouter = require('./routes/misRutas');

//Settings:
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middleware:
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false})); //Para entender que tipo de datos me envian los formularios. 

//Routes:
app.use('/', indexRouter);
//Starting the server:
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port: ${app.get('port')}`.red)
});