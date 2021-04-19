const express = require("express");
const router = express.Router();
const db = require("../controllers/Position");
//get list
router.get("/", db.get_List_Position);
router.post("/", db.add_Possition);
// router.get("/:id", db.get_Possition_ById);

// router.post("/", db.add_Possition);
// router.post("/update/",db.update_Possition);
// router.delete("/move/",db.delete_Possition);
module.exports = router;    