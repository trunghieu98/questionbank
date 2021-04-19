var db = require("../models");
var db_answer = db.Answer;
//get list
exports.get_List_Answer = function (req, res) {
    db_answer.findAll().then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.add_Answer=function(req,res){
    var data=req.body;
    data.forEach(dt=>{
        db_answer.create({
            Id_quesstion:   dt.Id_quesstion,
            Content:    dt.Content,
            Diem:   dt.Diem
        }).then(details=>{
            res.status(200).json({
                code:   '200',
                details:    details
            })
        })
    })
}