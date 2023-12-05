const express = require("express");
const router = express.Router();
const { uploadController } = require("./../controller/uploadController");
const upload = require("./../middleware/upload");

//route upload file
router.post("/upload", upload.single("img"), uploadController);

module.exports = router;
