const express = require("express");
const router = express.Router();
const imgController = require("../controllers/imgs/imgs.controller");
const uploadImg= require("../middlewares/uploadImg");
router.post("/upload/img", uploadImg.array('files', 50), imgController.upload);

module.exports = router;