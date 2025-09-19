const express = require("express");
const { sendGeneralEmail } = require("../Controllers/requestController");

const router = express.Router();

router.post("/createRequest", sendGeneralEmail);

module.exports = router;
