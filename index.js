const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

// storing express methods into variable
const app = express();

// returning authRoutes function and immediately invoking app parameter
require("./routes/authRoutes")(app);

// allowing heroku to find an available port or localhost5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
