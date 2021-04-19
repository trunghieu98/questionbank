var db = require("../models");
var db_exam_question=db.Exam_Question;
var db_examdetails_question=db.ExamDetails_Quesstion;
exports.add_Exam_Question_Byid=(req,res)=>{
    console.log(req.body);
    db_exam_question
    .findAll({
        where: { Id_exam:  req.body.id}
      })
    .then(exam_question => {
        res.status(200).json({
            sucess: 'true',
            exam_question: exam_question
        });
    })
    .catch(err => {
        console.log(err );
    });
};
exports.get_Exam_Question=(req,res)=>{
    
    db_exam_question
    .findAll()
    .then(exam_question => {
        res.status(200).json({
            sucess: 'true',
            exam_question: exam_question
        });
    })
    .catch(err => {
        console.log(err );
    });
};
exports.add_examdetails_question=(req,res)=>{
    console.log(req.body);
    var aray=req.body.id
    db_examdetails_question
    .findAll({
        where: { Id_examdetails :  req.body.id}
      })
    .then(examdetails_question=> {
        // arayy2=[];
        // aray.forEach(ar=>{
        //     examdetails_question.forEach(it=>{
        //         console.log(it.id)
        //         if(Number(ar)===Number(it.id)){
        //             arayy2.push(it);
        //         }
        //     })
        // })
        res.status(200).json({
            sucess: 'true',
            examdetails_question: examdetails_question
        });
    })
    .catch(err => {
        console.log(err );
    });
};