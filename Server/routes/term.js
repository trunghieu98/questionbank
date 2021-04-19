const express = require("express");
const router = express.Router();
const db = require("../controllers/Term");
//get list
router.get("/", db.get_List_Term);
// router.get("/:id", db.get_Term_ById);
// router.post("/", db.add_Term);
// router.post("/update/",db.update_Term);
// router.delete("/move/",db.delete_Term);
module.exports = router;    