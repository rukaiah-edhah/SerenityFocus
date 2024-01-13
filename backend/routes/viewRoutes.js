const router = require('express').Router();
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const passwordUtils = require('../lib/passwordUtils');
const { Users } = require('../model/models');
const { isAuth } = require('./authMiddleware');
const genPassword = require('../lib/passwordUtils').genPassword;


const allRoutes = (req, res) => {

    if (req.session.viewCount) {
        req.session.viewCount++;
    } else {
        req.session.viewCount = 1;
    }

    res.sendFile(path.join(__dirname, '../../client/public/index.html'))
}

// USER AUTHENTICATION API
router.post("/login", passport.authenticate('local', { failureRedirect: '/login-failure', successRedirect: 'login-success'}));

router.post("/register", (req, res) => {
    const saltHash = genPassword(req.body.password);

    const salt = saltHash.salt;
    const hash = saltHash.hash;

    const newUser = new Users({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        hash: hash,
        salt: salt
    })

    newUser.save()
        .then((user) => {
            console.log(user);
        });

    res.redirect('/login');
});


router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/protected-route")
})

router.get("/login-success", (req, res) => {
    res.send("<p>You successfully logged in</p>")
    res.redirect('/');
})

router.get("/login-failure", (req, res) => {
    res.send("<p>You have entered the wrong password</p>")
})

router.get("/protected-route", isAuth, (req, res) => {
    res.send('You are authenticated');
})

router.get("/", allRoutes);

module.exports = router;