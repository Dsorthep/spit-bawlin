const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");
const notes = require("./routes/api/notes");
const resources = require("./routes/api/resources");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
 }

// ALLOW CORS
const allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};
app.use(allowCrossDomain);

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/notes", notes);
app.use("/api/resources", resources);

app.use("*", (req, res) =>
 res.sendFile(path.join(__dirname, "../client/build/index.html"))
);


app.post("/resources", (req, res) => {
  const newResource = {
    title: req.body.title,
    url: req.body.url
  }
  new Resources(newResource)
    .save()
    .then(result => {
      res.send("Resource saved to database!");
    })
    .catch(err => {
      res.status(404).send("Something went wrong...");
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
