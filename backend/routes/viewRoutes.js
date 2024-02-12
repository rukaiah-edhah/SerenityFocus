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
router.post("/", passport.authenticate('local', { failureRedirect: "/login-failure", successRedirect: 'login-success'}));

router.post("/signup", async (req, res) => {
        const existingUser = await Users.findOne({ username: req.body.username});
        if (existingUser){
            return res.redirect("/exists")
        }

        const saltHash = genPassword(req.body.password);

        const salt = saltHash.salt;
        const hash = saltHash.hash;

        const newUser = new Users({
            username: req.body.username,
            password: req.body.password,
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            email: req.body.email,
            hash: hash,
            salt: salt
        })


        newUser.save()
            .then((user) => {
                console.log(user);
            });
        
        
        res.redirect("/");
});

router.get("/signup", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/sign/signup.html'))
})

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/protected-route")
})

router.get("/login-success", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/account/login-success.html'))
})

router.get("/exists", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/account/form_exists.html'))
})

router.get("/login-failure", (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/public/account/login-failure.html'))
})

router.get("/protected-route", isAuth, (req, res) => {
    res.send('You are authenticated');
})

router.get("/", allRoutes);

module.exports = router;