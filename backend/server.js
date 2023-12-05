require('dotenv').config();
const express = require('express');
const app = express();
const port = 8000;
const bodyParser = require('body-parser');
const cors = require('cors');

const api = require('./routes/api');
const router = require('./routes/viewRoutes');

const session = require('express-session');

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
app.use(session({
    secret: 'secret-key', // add a unique strong secret in .env
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // set to true if using https
}));

app.use(router);
app.use(express.static('client/public'));

app.use('/api', api);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})