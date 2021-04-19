var db= require("../models");
var db_student=db.Student;
var db_teacher=db.Teacher;
const bcrypt = require('bcrypt');
exports.get_UserByid=function(req,res){
    db_student.
    findOne({   
        where: {Id_student: req.body.username} 
    }).then(item=>{
        if(!item){
            res.status(500).json({
                code:   '500',
                details:    "Error user..."
            })
        }
        else if (item){
            let isCorrectPassWord=bcrypt.compareSync(req.body.password,item.Password);
            console.log(isCorrectPassWord);
            if(isCorrectPassWord){
                res.json({ user: item, jwt: `${item.id}` });        
            }
            else{
                res.status(500).json({
                    code:   '500',
                    details:    "Error user..."
                })
            }
        }
    }).catch((err)=>{
        console.log(err);
    })
}
exports.get_TeacherByid= async function(req,res){
    db_teacher.
    findOne({   
        where: {idteacher: req.body.username} 
    }).then(item=>{
        if(!item){
            res.status(500).json({
                code:   '500',
                details:    "Error user..."
            })
        }
        else if (item){
            console.log(item);
            console.log(item.Password);
            let isCorrectPassWord= bcrypt.compareSync(req.body.password,item.Password);
            console.log(isCorrectPassWord);
            if(isCorrectPassWord){
                res.json({ user: item, jwt: `${item.id}` });        
            }
            else{
                res.status(500).json({
                    code:   '500',
                    details:    "Error user..."
                })
            }
        }
    }).catch((err)=>{
        console.log(err);
    })
}