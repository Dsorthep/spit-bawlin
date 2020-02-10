module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/spitbawlindb",
  secretOrKey: "process.env.MONGODB_URI"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)
