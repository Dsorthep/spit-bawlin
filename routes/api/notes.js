const express = require("express");
const app = express();

const Notes = require("../../models/Notes");

app.post("/", (req, res) => {
  const newNote = {
    title: req.body.title,
    eventdate: req.body.eventdate,
    note: req.body.note
  }
  Notes.create(newNote)
    .then(dbNote => res.json(dbNote))
});

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

module.exports = app;