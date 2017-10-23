const passport = require('passport');

// we are using module.exports here because app is not defined in authRoutes but index.js.
module.exports = (app) => {

    app.get('/auth/google', passport.authenticate('google',
            {scope: ['profile', 'email']}
    ));

    app.get(
            '/auth/google/callback',
            passport.authenticate('google'),
            (req, res) => {
                res.redirect('/');
            }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    })

    app.get('/api/current_user', (req, res) => {
        console.log(req.user)
        res.send(req.user);
    })

}
