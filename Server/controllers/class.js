var db = require('../models');
var db_grade=db.Grade;
var db_class=db.Class;
exports.get_List_Class=function(req,res){
    db_class.findAll().then(details=>{
        res.status(201).json({
            seccuss:  'true',
            details:   details
        })
    })
}
exports.add_Class =function(req,res){
    let items= req.body;
    items.forEach(item=>{
        db_grade.findOne({
            where: { Id_Grade:  item.Id_Grade }
          }).then(result=>{
              if(result){
                db_class.create({
                            Name:   item.Name,
                            Id_Grade: item.Id_Grade
                        })
                        .then(items => {
                            res.status(201).json({ 
                                data: "Data add successfully",
                                details:    items 
                            });
                        })
              }
              else{
                res.status(201).json({ 
                    data: "Insert Error 400",
                    Code: "400",
                    details:    "Body parse error"
                });
                console.log("errr");
              }
          }).catch(err=>{
              console.log("errrrrrrr");
          })
    })
}