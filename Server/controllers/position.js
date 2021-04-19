var db = require("../models");
var db_position = db.Position;
// var db_class=db.Class;
//get list
exports.get_List_Position= function (req, res) {
      db_position.findAll({
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
exports.add_Possition=function(req,res){
    db_position.create({
        Name_position:  req.body.Name_position
    }).then(details=>{
        res.status(200).json({
            code:   '200',
            details:    details
        })
    });
}