const multer = require("multer");
var moment =require('moment');
const textFilter = (req, file, cb) => {
  if (
    file.mimetype.includes("text/plain")
  ) {
    cb(null, true);
  } else {
    cb("Please upload only text file.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    var url="C:\\Users\\hieu\\Documents\\questionBank\\question_bank\\public\\uploads\\answer\\";
    cb(null,url);
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    var name=moment().format('YYYY-MM-DD-h-mm-ss-a')+"-"+file.originalname
    cb(null, name); 
  },
});

var uploadFile = multer({ storage: storage, fileFilter: textFilter });
module.exports = uploadFile;