const multer = require("multer");
var moment =require('moment');
const ImgFilter = (req, file, cb) => {
  console.log(file);
  if (
    file.mimetype==='image/jpeg' ||
    file.mimetype==='image/png'
  ) {
    cb(null, true);
  } else {
    cb("Please upload only excel file.", false);
  }
};

var storage = multer.diskStorage({
  destination: (req, file, cb) => {

      var url="C:\\Users\\hieu\\Documents\\questionBank\\question_bank\\public\\uploads\\";
    cb(null,url);
  },
  filename: (req, file, cb) => {
    // console.log(file.originalname);
    var name=moment().format('YYYY-MM-DD-h-mm-ss-a')+"-"+file.originalname
    cb(null, name);
  },
});

var uploadFile = multer({ storage: storage, fileFilter: ImgFilter });
module.exports = uploadFile;