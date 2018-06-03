const path = require('path');
const express = require('express');
const app = express();

//logging middleware
const morgan = require('morgan')
app.use(morgan('dev'));

//bodyparser middleware
const bodyParser       = require('body-parser');
const jsonParser       = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({extended: true});
app.use(jsonParser);
app.use(urlencodedParser);

//static middleware
app.use(express.static(path.join(__dirname, '../public')));

app.get(*,  (req,res,next) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})


module.exports = app
