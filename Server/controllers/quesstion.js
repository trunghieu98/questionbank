var db = require("../models");
var db_quesstion = db.Quesstion;
var db_answer=db.Answer;
// var db_class=db.Class;
//get list
exports.get_List_Quesstion = function (req, res) {
    db_quesstion.findAll({
        include: [{
            model: db.Answer, as: "Id_Quesstion"
        }]
    }).then(details => {
        res.status(200).json({
            success: 'true',
            details
        })
    });
};
// exports.get_Quesstion_ById = function (req, res) {
//   var details=[];
//   req.body.Id_quesstion.forEach(dt=>{
//       db_quesstion.findOne({
//         include: [{
//             model: db.Answer, as: "Id_Quesstion"
//         }],
//         where: { id:  dt}
//       }).then(data=>{
//         details.push(data.id);
//       })
//     console.log(details);
//   })
//   res.status(200).json({
//     success: 'true',
//     details
// })
//     // db_quesstion.findOne({
//     //     include: [{
//     //         model: db.Answer, as: "Id_Quesstion"
//     //     }],
        
//     //     where: { id:  req.body.Id_quesstion}
//     // }).then(details => {
//     //   console.log(details.id);
//     //     res.status(200).json({
//     //         success: 'true',
//     //         details
//     //     })
//     // });
// };
exports.get_Quesstion_ById = function (req, res) {
    var aray=req.body.Id_quesstion;
  db_quesstion.findAll({
      include: [{
          model: db.Answer, as: "Id_Quesstion"
      }],
    
      where: { id:  req.body.Id_quesstion}
  }).then(details => {
    arayy2=[];
    aray.forEach(ar=>{
        details.forEach(it=>{
            console.log(it.id)
            if(Number(ar)===Number(it.id)){
                arayy2.push(it);
            }
        })
    })
   
    console.log(details.id);
      res.status(200).json({
          success: 'true',
          details: arayy2
      })
  });
};
// exports.get_Quesstion_ById = function (req, res) {
//     var ar=[];
//       ar=req.body.Id_quesstion.map( async (idx)=>{
      
//             const a= await db_quesstion.findOne({
//                 include: [{
//                     model: db.Answer, as: "Id_Quesstion"
//                 }],
              
//                 where: { id:  Number(idx)}
//             })
//          return a
//       })
//   console.log(ar)
//   res.json({
//               success: 'true',
//               ar
//           })
  // console.log(data)
  //   db_quesstion.findAll({
  //       include: [{
  //           model: db.Answer, as: "Id_Quesstion"
  //       }],
      
  //       where: { id:  }
  //   }).then(details => {
  //     console.log(details.id);
  //       res.status(200).json({
  //           success: 'true',
  //           details
  //       })

exports.add_Quesstion=function(req,res){
    var data=req.body;
    data.forEach(dt=>{
        db_quesstion.create({
            Id_topic:   dt.Id_topic,
            Id_teacher: dt.Id_teacher,
            Id_level:   dt.Id_level,
            Name_quesstion: dt.Name_quesstion,
        }).then(details=>{
            res.status(200).json({
                code:   '200',
                details:    details
            })
        });
    })
}
exports.add_Question_Answer=function(req,res){

  console.log(req.data);
    var data=req.body;
        db_quesstion.create({
            Id_topic:   data.Id_topic,
            Id_teacher: data.Id_teacher,
            Id_level:   data.Id_level,
            Name_quesstion: data.Name_quesstion,
            Id_grade: data.Id_grade
        }).then(details=>{
            var Id_quesstion= details.id;
            var diem=req.body.answer;
            if(diem==='op1'){
                tutorial = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt,
                  Diem: 1,
                }
              }else{
                tutorial = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt,
                  Diem: 0,
                };
              }
              if(diem==='op2'){
                tutorial1 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt1,
                  Diem: 1,
                }
              }else{
                tutorial1 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt1,
                  Diem: 0,
                };
              }
              if(diem==='op3'){
                tutorial2 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt2,
                  Diem: 1,
                }
              }else{
                tutorial2 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt2,
                  Diem: 0,
                };
              }
              if(diem==='op4'){
                tutorial3 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt3,
                  Diem: 1,
                }
              }else{
                tutorial3 = {
                  Id_quesstion: Id_quesstion,
                  Content: req.body.dt3,
                  Diem: 0,
                };
              }
             
              let tutorials = [];
              tutorials.push(tutorial, tutorial1, tutorial2, tutorial3);
              db_answer.bulkCreate((tutorials)).then(details=>{
                      res.status(200).json({
                          code: '200',
                          massega: "Thêm thành công câu hỏi"
                      })
              })
        }) .catch(err => {
            console.log(err );
        });
}

exports.find_Quesstion_ById = function (req, res) {
  db_quesstion.findAll({
      include: [{
          model: db.Answer, as: "Id_Quesstion"
      }],
      where: {Name_quesstion: {
      $like: req.body.name
    }}
  }).then(details => {
      res.status(200).json({
          success: 'true',
          details
      })
  });
};