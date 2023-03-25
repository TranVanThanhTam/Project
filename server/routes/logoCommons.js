const { CONNECTION_STRING } = require("../constants/dbSettings");
const { default: mongoose } = require("mongoose");

var express = require('express');
var router = express.Router();

// MONGOOSE
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_STRING);

const { LogoCommon } = require("../models");

/* GET ALL */
router.get("/", function (req, res, next) {
  try {
    LogoCommon.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(400).send({ message: err.message });
      });
  } catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
