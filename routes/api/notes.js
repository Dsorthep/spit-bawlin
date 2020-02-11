const express = require("express");
const app = express();

const Notes = require("../../models/Notes");


app.get("/notes", async (req, res) => {
  try {
    res.status(200).json({
      data: Notes
    });
  } catch (err) {
    res.status(404).json({
      message: "Some error occured",
      err
    });
  }
});

app.post("/api/notes", function(req, res) {
  console.log(req.body);
  res.send(req.body);
});

module.exports = app;