require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes/api');
const router = require('./routes/viewRoutes');

const session = require('express-session');
const { connection } = require('./model/models');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
require('./config/passport');

const aLoggerMiddleware = (req, res, next) => {
    console.log(req.url, req.method, res.statusCode);
    next();
}

app.use(aLoggerMiddleware);
app.use(
    bodyParser.json({ extended: false}),
    bodyParser.urlencoded({ extended: false})
);

app.use(cors());


const sessionStore = new MongoStore({ mongooseConnection: connection, collection: 'sessions' });

app.use(session({
    secret: 'secret-key', // add a unique strong secret in .env
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: { 
        // secure: true, // set to true if using https
        maxAge: 1000 * 60 * 60 * 24 // 1 day limit
     }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(router);
app.use(express.static('../client/public'));

app.use('/api', api);


app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})