var db=require('../models');
var str=require('./replace'); 
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync();
var db_teacher=db.Teacher;
exports.get_Teacher= function(req,res){
    db_teacher.findAll().then(details=>{
        res.status(200).json({
            Code:   '200',
            details:    details
        });
    })
}
exports.add_Teacher_ById= function(req,res){
    db_teacher.findOne({
        where: {id: req.body.id}
    }).then(details=>{
        
        res.status(200).json({
            Code:   '200',
            details:    details
        });
    })
}
exports.get_Teacher_Listtc=function(req,res){
    console.log(req.body);
    db_teacher.findAll({
        where: {Id_exam_subject: req.body.Id_exam_subject,
      
    }
    }).then(details=>{
        let id=[];
        details.forEach(it=>{
                id.push(it.id);
        })
        console.log(id)
        res.status(200).json({
            success:   'true',
            details:    id
        })
    })
}
exports.add_Teacher= function(req,res){
    var Id_teacher="";
    var Name="";
    var dt=req.body;
    console.log(dt)
    var value=100000;
    var pass=bcrypt.hashSync(dt.password,salt)
    db_teacher.findAll().then(data=>{
        var key =data.length;
        if(key>0){
            Id_sd=data[key-1].id+value;
        }
        else{
            Id_sd=1+value;
        }
        Name=str.cutString(str.removeAccents(req.body.Name));
        Id_teacher=Name+Id_sd;
        db_teacher.create({
            
            Id_subject: dt.Id_subject,
            Id_exam_subject: dt.Id_exam_subject,
            idteacher: Id_teacher,
            Name: dt.Name,
            Dob: dt.Dob,
            Gender: dt.Gender,
            Address: dt.Address,
            Phone: dt.Phone,
            Password: pass,
            role: dt.role
        }).then(details=>{
            res.status(200).json({
                success:   'true',
                details:    details
            })
        })
    });
}
exports.update_Teacher_ById= async function(req,res){
    const pass= await bcrypt.hashSync (req.body.Password,10);
    console.log(pass);
    console.log(req.body.id);
            db_teacher.update({Password: pass},{
                where: {
                    id:req.body.id
                }
            }).then(data=>{
                res.status(200).json({
                    data
                })
            })
      
}