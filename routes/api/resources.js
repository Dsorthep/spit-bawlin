const express = require("express");
const router = express.Router();


// Load Notes & Resources Controllers
const Resources = require("../../models/Resources");

router.get("/users", async (req, res) => {
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

module.exports = router;