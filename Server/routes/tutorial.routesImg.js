// const express = require("express");
// const router = express.Router();
// const imgController = require("../controllers/imgs/img.controller");
// const uploadImg= require("../middlewares/uploadImgOne");
// router.post("/upload", uploadImg.single('file'), imgController.upload);
var moment =require('moment');
// 'use strict';
const express = require('express');
const router = express.Router();
var path = require('path')
var fs = require('fs')
const multer = require('multer');

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        var url="C:\\Users\\hieu\\Documents\\questionBank\\question_bank\\public\\uploads\\";
      cb(null,url);
    },
    filename: (req, file, cb) => {
      // console.log(file.originalname);
      var name=moment().format('YYYY-MM-DD')+"-"+file.originalname
      cb(null, name);
    },
  });
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
  
router.post('/upload',function(req,res){
    var upload = multer({ storage : storage, fileFilter: ImgFilter}).single('file');
    upload(req,res,function(err) {
        if(err) {
            return res.end("Error uploading file.");
        }
        let path ="C:\\Users\\hieu\\Documents\\questionBank\\question_bank\\public\\uploads\\"+moment().format('YYYY-MM-DD')+"-"+req.file.originalname
      
      res.status(200).json({
          path: path
      })
    });
});

module.exports = router;