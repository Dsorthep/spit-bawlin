const express = require("express");
const router = express.Router();
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