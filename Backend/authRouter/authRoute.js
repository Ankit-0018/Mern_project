const express = require("express");
const cors = require("cors")
const {signup , loggin} = require("../Controller/authController")

const router = express.Router();

router.use(cors());
router.post("/signup" , signup)
router.post("/loggin" , loggin)

module.exports = router