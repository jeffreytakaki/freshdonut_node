const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('User');

// passport will create a cookie for us
passport.serializeUser((user, done) => { //user is mongoose model being returned from findOnea
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    // this is what returns req.user
    User.findById(id).then(user => {
        done(null, user);
    });
});

// add google strategy to passport plugin
passport.use(
        new GoogleStrategy(
                {
                    clientID: config.googleClientId,
                    clientSecret: config.googleClientSecret,
                    callbackURL: '/auth/google/callback',
                    proxy: true //we need this because requests to the server loses it's https from heroku.
                },
                async (accessToken, refreshToken, profile, done) => {
                    console.log("profile => ",profile)
                    const existingUser = await User.findOne({googleId: profile.id});

                    if(existingUser) {
                        return done(null, existingUser);
                    }
                    const user = await new User({
                        googleId: profile.id,
                        displayName: profile.displayName,
                        profileImage: profile.photos[0].value})
                            .save() // create a new model instance.

                    done(null, user)

                }
        )
);