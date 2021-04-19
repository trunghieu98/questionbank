var db=require('../models');
var db_subject=db.Subject;
exports.get_Subject=function(req,res){
    db_subject.findAll().then(details=>{
        res.status(200).json({
         success:    'true',
         details:    details
        });
     });
}
exports.add_Subject=function(req,res){
    item=req.body;
    db_subject.create({
        Name_subject:   item.Name_subject,
    })
    .then(items => {
        res.status(201).json({ 
            data: "Data add successfully",
            details:    items 
        });
    })
}