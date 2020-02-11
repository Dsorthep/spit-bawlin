const express = require("express");
const app = express();


// Load Notes & Resources Controllers
const Resources = require("../../models/Resources");

app.get("/resources", async (req, res) => {
  try {
    res.status(200).json({
      data: Resources
    });
  } catch (err) {
    res.status(404).json({
      err
    });
  }
});

app.post("/api/resources", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = app;