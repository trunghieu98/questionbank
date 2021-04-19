const db = require("../../models");
var moment =require('moment');
const upload = function (req, res) {
    try {
      console.log(req.file)
    if (req.file=== undefined) {
      return res.status(400).send("plase upload file img");
    }
    else{
      let path ="C:\\Users\\hieu\\Documents\\questionBank\\question_bank\\public\\uploads\\"+moment().format('YYYY-MM-DD-h-mm-ss-a')+"-"+req.file.originalname;
      
      res.status(200).json({
          path: path
      })
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "Could not upload the file: "+req.file.originalname,
    });
  }
};
module.exports = {
  upload
};