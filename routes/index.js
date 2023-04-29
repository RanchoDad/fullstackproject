// // google OAuth logging in/out code from mongoose-movies-master example

const express = require('express');
let router = express.Router();
const passport = require('passport');
const mainschemaitemsController = require('../controllers/mainschemaitems');

// // This app has no "home" page, but your projects should 😀
router.get('/', function(req, res, next) {
  console.log('you are at the homepage')
  res.render('homepage');
});

router.get('/auth/google', passport.authenticate('google', 
  {scope: ['profile', 'email']
}
// // this makes the little thing pop up that asks if you want to use google here
));

// // Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/mainschemaitems',
    failureRedirect: '/mainschemaitems'
  }
));
// // OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    req.session.destroy(function(err) {
      res.redirect('/');
    });
  });
});

module.exports = router;