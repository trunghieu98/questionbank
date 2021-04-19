const express = require("express");
const router = express.Router();
const textController = require("../controllers/imgs/text.controller");
const upload = require("../middlewares/uploadtext");
router.post("/upload", upload.single("file"), textController.upload);
// router.get("/tutorials", excelController.getTutorials);
module.exports = router;