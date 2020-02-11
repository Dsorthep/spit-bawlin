const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load Notes & Resources Controllers
const notesController = require("../../controllers/notesController");
const resourcesController = require("../../controllers/resourcesController");

router.route("/")
  .get(notesController.findAll)
  .post(notesController.create)
  .get(resourcesController.findAll)
  .post(resourcesController.create);


  // const express = require("express");
  // const router = express.Router();
  
  // const Notes = require("../../models/Notes");
  
  
  // router.get("/users", async (req, res) => {
  //   try {
  //     res.status(200).json({
  //       data: Notes
  //     });
  //   } catch (err) {
  //     res.status(404).json({
  //       message: "Some error occured",
  //       err
  //     });
  //   }
  // });

//   const Resources = require("../../models/Resources");

// router.get("/users", async (req, res) => {
//   try {
//     res.status(200).json({
//       data: Resources
//     });
//   } catch (err) {
//     res.status(404).json({
//       err
//     });
//   }
// });
  
  // module.exports = router;