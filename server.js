// imports to run the server with google using express etc
const createError = require('http-errors');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const express = require('express');
const app = express();
const db = require('./config/database');
const passPortDb = require('./config/passport');
const methodOverride = require('method-override')

require('dotenv').config()

const PORT = process.env.PORT || 3000;

// import routers
const indexRouter = require('./routes/index');
// const mainschemaitemRouter = require('./routes/mainschemaitems');

// pages begin with 'views, .ejs files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// mount the middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.use(cookieParser());

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session())
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
// app.use('/mainschemaitems', mainschemaitemRouter);

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

// listener to run the app
app.listen(PORT, () => console.log('The app is working!', PORT))

module.exports = app
