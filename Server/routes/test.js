const express = require("express");
const router = express.Router();
const db = require("../controllers/Test");
//get list
router.get("/", db.get_List_Test);

// router.get("/:id", db.get_Test_ById);
// router.post("/", db.add_Test);
// router.post("/update/",db.update_Test);
// router.delete("/move/",db.delete_Test);
module.exports = router;    