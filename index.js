const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

// storing express methods into variable
const app = express();

// telling express to use cookies
// cookies have a maxAge of 30 days
// cookies have random encryption from config
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

// telling passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

// returning authRoutes function and immediately invoking app parameter
require("./routes/authRoutes")(app);

// allowing heroku to find an available port or localhost5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
