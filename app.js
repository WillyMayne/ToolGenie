var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var passport = require('passport');
var flash = require('express-flash');
var session = require('express-session');
require("dotenv").config()


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
const userVerificationMiddleware = require('./middleware');

var app = express();

const initializePassport = require('./passport-config');
initializePassport(passport);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session ());






// Connect to DB
const db = process.env.DB_HOST;

mongoose.set('strictQuery', true);

mongoose.connect(db);
console.log("Database connected")

app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/users', usersRouter);




// Apply the userVerificationMiddleware to the registration route
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
