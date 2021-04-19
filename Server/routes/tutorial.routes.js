const express = require("express");
const router = express.Router();
const excelController = require("../controllers/tutorials/excel.controller");
const upload = require("../middlewares/upload");
router.post("/upload", upload.single("file"), excelController.upload);
// router.get("/tutorials", excelController.getTutorials);
module.exports = router;