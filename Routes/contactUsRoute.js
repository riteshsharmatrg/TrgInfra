const express = require("express");
const { sendGeneralEmail } = require("../Controllers/contactUsController");

const router = express.Router();

router.post("/contact", sendGeneralEmail);

module.exports = router;
