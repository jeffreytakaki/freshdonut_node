const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const config = require('./config/keys');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');

require('./models/User');
require('./models/Store');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongodbconnect);

const app = express();

app.use(
        cookieSession({
            maxAge: 30 * 24 * 60 * 60 * 1000,
            keys: [config.cookieKey]
        })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


require('./routes/authRoutes')(app);
require('./routes/storeRoutes')(app);


const PORT = process.env.PORT || 5000;
app.listen(PORT);
