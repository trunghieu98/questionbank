var db= require('../models');
var db_student=db.Student;
var str=require('./replace');
const value=1000000;
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync();
exports.get_All_Student=function(req,res){
    db_student.findAll().then(details=>{
       res.status(200).json({
        success:    'true',
        details:    details
       });
    });
}
exports.add_Student= async function(req,res){
    var Id_student="";
    var Name="";
    // var items=req.body;
    var items=req.body;
    console.log(items)
    var pass= bcrypt.hashSync(items.password,salt)
    db_student.findAll().then(data=>{
        console.log(data)
                var key =data.length;
                if(key>0){
                    Id_sd=data[key-1].id+value;
                }
                else{
                    Id_sd=value;
                }
                Name=str.cutString(str.removeAccents(items.Name));
                var i=1;
                Id_sd=Id_sd+i
                Id_student=Name+Id_sd;
                db_student.create({
                        Id_student:  Id_student,
                        Id_class:   items.Id_class,
                        Name: items.Name,
                        Dob: items.Dob,
                        Gender: items.Gender,
                        Address: items.Address,
                        Phone: items.phone,
                        Password: pass
                    }).then(details=>{
                        res.status(200).json({
                            success:   'true',
                            details:    details
                        })
                    })
       })
    
}
exports.add_student_ById= function(req,res){
    db_student.findOne({
        where: {id: req.body.id}
    }).then(details=>{
        
        res.status(200).json({
            Code:   '200',
            details:    details
        });
    })
}