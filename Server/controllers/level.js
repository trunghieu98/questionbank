var db = require("../models");
var db_level= db.Level;
// var db_class=db.Class;
//get list
exports.get_List_Level= function (req, res) {
    db_level.findAll({
        // include: [{
        //     model: db.Class, as: "Id_Grade"
        // }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
exports.add_Level=function(req,res){
    db_level.create({
        content:    req.body.content
    }).then(details=>{
        res.status(200).json({
            code:   '200',
            details:    details
        })
    })
}