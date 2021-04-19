const { Switch } = require('react-router-dom');
var db=require('../models');
var db_question=db.Quesstion;
exports.get_Pagination=function(req,res){
    var limit = req.query.limit;
    console.log(limit);
    var collection=req.query.collection;
    console.log(collection);
    switch(collection){
        case "question":
            db_question.findAll({
                include: [{
                    model: db.Answer, as: "Id_Quesstion"
                }],
                 where: { 
                     Id_teacher:  req.body.id,
                    Id_grade: req.body.Id_grade
                },
                order: [["createdAt", "DESC"]],
            }).then(item=>{
                res.json({
                    page:   Math.ceil(item.length/limit),
                    post:   item
                });
            })
            break;
        
    }
}