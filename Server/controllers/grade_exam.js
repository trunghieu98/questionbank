var db=require('../models');
var db_chamdiem=db.Quesstion;
var db_examdetail_question=db.ExamDetails_Quesstion;
var db_test=db.Test;
var db_exam_question=db.Exam_Question;
var db_examdetails=db.ExamDetails;
var db_exam=db.Exam;
var hienthi=db.Grade_exam;
exports.get_Grade_Exam=function(req,res){
    var data=req.body.question;
    var Arr=[];
    data.map(dt=>{
        Arr.push(dt.question);
    })
    db.Quesstion.findAll({
        include: [{
            model: db.Answer, as: "Id_Quesstion"
        }],
        where: {id: Arr}
    }).then(data=>{
        var arr=[];
        data.map(id=>{
            arr.push(id.Id_Quesstion);
        })
        var arr2=[];
        arr.map(ar=>{
           ar.map(a=>{
            if(Number(a.Diem)===1){
                arr2.push({ question: a.Id_quesstion, answer:a.id });
            }
           })
        })
        console.log(req.body.question);
        console.log(arr2);
        len=req.body.len;
        let diem=10/len;
        console.log(diem);
        var array1=req.body.question;
        const array3=array1.concat(arr2);
        let result=uniqByKeepLast(array3, it => it.answer);
        console.log(result);
        len_kq=result.length;
        var result_kq=0;
        var lenIndex=req.body.question.length;
        if(lenIndex===len){
            if(len_kq >len){
                result_kq=10-(len_kq-len)*diem;
            }
            else{
                result_kq=10;
            }
        }
        else{
            if(len_kq >lenIndex){
                result_kq=(lenIndex-(len_kq-lenIndex))*diem;
            }
            else{
                result_kq=lenIndex*diem
            }
        }
        console.log(req.body);
        db_examdetail_question.findAll({
            where: {Id_examdetails : req.body.Exam}
        }).then(data=>{
                var array_question=[];
                data.forEach(dt=>{
                    array_question.push(dt.Id_quesstion);
                })
                db.Quesstion.findAll({
                    include: [{
                        model: db.Answer, as: "Id_Quesstion"
                    }],
                    where: {id:array_question}
                }).then(data=>{
                    var Aray=[];
                    var Aray_Df=[];
                    data.forEach(dt=>{
                        dt.Id_Quesstion.forEach(qs=>{
                            if(Number(qs.Diem)===1){
                                Aray_Df.push({question:qs.Id_quesstion,answer:"",core:0})
                                Aray.push({question:qs.Id_quesstion,answer:qs.id,core:1})
                            }
                        })
                    })
                    var Aray2=Aray_Df.concat(req.body.question);
                    let result_Aray2=uniqByKeepLast(Aray2, it => it.question);
                    var result_Aray3=[]
                    result_Aray2.forEach(qs=>{
                        Aray.forEach(qss=>{
                            if(qss.question===qs.question){
                                if(qs.answer===qss.answer){
                                    result_Aray3.push(qss)
                                    }
                                else{
                                    result_Aray3.push(qs)
                                }
                            }
                        })
                    })
                    var time_start=[]
                    time_start={
                        times:req.body.time_start,
                        time:req.body.time_start1
                    };
                    var time_end=[];
                    time_end={
                        times:req.body.time_end,
                        time:req.body.time_end1
                    };
                    console.log(time_start);
                    console.log(req.body.time_start);
                    console.log(result_Aray3);
                    db_test.create({
                        Id_exam:req.body.Id_exam,
                        Id_student:req.body.Id_student,
                        Id_question:JSON.stringify(result_Aray3),
                        Id_Examdetails:req.body.Exam,
                        Point:  result_kq,
                        Time_start:JSON.stringify(time_start),
                        Time_end:JSON.stringify(time_end)
                    }).then(res=>{
                        if(res!==undefined){
                            console.log(req.body.stt);
                            db.ExamDetails.findOne({
                                where: {
                                    Id_exam:req.body.Id_exam,
                                    Stt_exam: req.body.stt
                                }                                
                            }).then(data=>{
                                console.log(data);
                                db.ExamDetails.update({Content: 1},{
                                    where: {
                                        id:data.id
                                    }                                
                                })
                            })
                        }
                    })
                   
                })
        })
        res.status(200).json({
            data:result_kq
        })
    })
}
function uniqByKeepLast(answer, key) {
    return [
        ...new Map(
            answer.map(x => [key(x), x])
        ).values()
    ]
}
exports.show_Grade_Exam=function(req,res){
    console.log(req.body)
    db_test.findAll({
        where: {Id_exam: req.body.id}
    }).then(tests=>{
        var tests=tests;
        db_exam_question
        .findAll({
            where: {Id_exam: req.body.id}
        })
        .then(exam=> {
            var rs=[];
            exam.forEach(ex=>{
                rs.push(ex.Id_quesstion);
            })
            var data=[];
            data.push({exam:rs,test:tests});
            res.status(200).json({
                data: data
            })
        })
    }).catch(err => {
        console.log(err );
    });
}
exports.get_examdetails=function(req,res){
    db_examdetails.findAll({
        where:{Id_exam: req.body.id}
    }).then(details=>{
        res.status(200).json({
            details: details
        })
    })
}
exports.hienthibaithi=function(req,res){
    hienthi.findAll({
        where:{made: req.body.id}
    }).then(details=>{
        res.status(200).json({
            details: details
        })
    })
}
exports.hienthibaithitoanbo=function(req,res){
    hienthi.findAll({
        group: ['made'],
         distinct: true
    }).then(details=>{
        res.status(200).json({
            details: details
        })
    })
}
exports.thembaithi=function(req,res){
    // var items=[{made:5,
    //     thongtin:[{diem: 2.3333333333333335, mssv: 264575, url: "264575-20210107-15-16-42-5338.jpg"},
    //     {diem: 2.3333333333333335, mssv: 264575, url: "264575-20210107-15-16-42-5338.jpg"}]}]
    //         // var items=req.body.thongtin
    // var made=items.made;
    // console.log(items.length);
   
    console.log(req.body)
    var items=req.body.Id_student;
    var made=req.body.made;
    if(items.length>0){
        items.forEach(item1=>{
            console.log(item1)
            item1.forEach(item=>{
                hienthi.create({
                    Id_student: item.mssv,
                    diem: item.diem,
                    url: item.url,
                    made: made
                }).then(details=>{
                    res.status(200).json({
                        details: details
                    })
                })
            })
        })
    }
}