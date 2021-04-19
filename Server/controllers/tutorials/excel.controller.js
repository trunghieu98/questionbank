const db = require("../../models");
var db_exam = db.Exam;
var db_quesstion = db.Quesstion;
var db_exam_quesstion = db.Exam_Question;
var db_answer = db.Answer;
const readXlsxFile = require("read-excel-file/node");
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync();
const  upload = function async (req, res) {
    try {
    if (req.file === undefined) {
      return res.status(400).send("Please upload an excel file!");
    }
    let path =
      __basedir + "/upload/" + req.file.filename;
      var pass= bcrypt.hashSync(req.body.Pass,salt)
    readXlsxFile(path).then((rows) => {
      rows.shift();
      db_exam.create({
        Id_teacher: req.body.Id_teacher,
        Id_exam_subject: req.body.Id_exam_subject,
        Id_grade: req.body.Id_grade,
        Time: req.body.Time,
        Pass:  pass,
        Note: req.body.Note,
        stt: 0
        
      }).then(exam => {
        id_exam = exam.id;
        rows.forEach((row) => {
          db_quesstion.create({
            Id_grade: req.body.Id_grade,
            Name_quesstion: row[1],
            Id_teacher: req.body.Id_teacher,
            Id_topic : row[8],
            Id_level : row[7],
        
          }).then(qs => {
            var id_quesstion = qs.id;
            let tutorial,tutorial1,tutorial2,tutorial3;
            if(row[6]===1){
              tutorial = {
                Id_quesstion: id_quesstion,
                Content: row[2],
                Diem: 1,
              }
            }else{
              tutorial = {
                Id_quesstion: id_quesstion,
                Content: row[2],
                Diem: 0,
              };
            }
            if(row[6]===2){
              tutorial1 = {
                Id_quesstion: id_quesstion,
                Content: row[3],
                Diem: 1,
              }
            }else{
              tutorial1 = {
                Id_quesstion: id_quesstion,
                Content: row[3],
                Diem: 0,
              };
            }
            if(row[6]===3){
              tutorial2 = {
                Id_quesstion: id_quesstion,
                Content: row[4],
                Diem: 1,
              }
            }else{
              tutorial2 = {
                Id_quesstion: id_quesstion,
                Content: row[4],
                Diem: 0,
              };
            }
            if(row[6]===4){
              tutorial3 = {
                Id_quesstion: id_quesstion,
                Content: row[5],
                Diem: 1,
              }
            }else{
              tutorial3 = {
                Id_quesstion: id_quesstion,
                Content: row[5],
                Diem: 0,
              };
            }
           
            let tutorials = [];
            tutorials.push(tutorial, tutorial1, tutorial2, tutorial3);
            db_answer.bulkCreate((tutorials)).then(ans => {
              db_exam_quesstion.create({
                Id_quesstion: id_quesstion,
                Id_exam: id_exam
              }).then(result => {
                res.status(200).send({
                  message: "Uploaded the file successfully: ",
                  details: tutorials
                });
              })
            })
          })
        });
      });
    })
  } catch (error) {

    res.status(500).send({
      message: "Could not upload the file: " + req.file.originalname,
    });
  }
};
module.exports = {
  upload
};