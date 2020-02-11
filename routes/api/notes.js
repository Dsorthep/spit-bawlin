const express = require("express");
const router = express.Router();

const Notes = require("../../models/Notes");


router.get("/users", async (req, res) => {
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

module.exports = router;