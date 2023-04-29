module.exports = function(req, res, next) {
    // uses passport middleware to authenticate
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}