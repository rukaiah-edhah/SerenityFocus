const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const { Users } = require('../model/models');
const validPassword = require('../lib/passwordUtils').validPassword;

// passport.use();

const customFields = {
    usernameField: "username",
    passwordField: "password"
}

const verifyCallback = (username, password, done) => {

    Users.findOne({ username: username })
        .then((user) => {
            if (!user) { return done(null, false)}

            const isValid = validPassword(password, user.hash, user.salt);

            if (isValid){
                return done(null, user);
            } else {
                return done(null, false);
            }
        })
        .catch((err) => {
            done(err);
        })

}

const strategy = new LocalStrategy(customFields, verifyCallback);

passport.use(strategy);

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((userId, done) => {
    Users.findById(userId)
        .then((user) => {
            done(null, user);
        })
        .catch(err => done(err))
});