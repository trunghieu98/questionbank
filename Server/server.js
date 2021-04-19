const express=require("express");
const app=express();
const db=require("./models");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT =process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
let Test=require('./routes/test')
let	Class =require('./routes/class');
let	exam_subject =require('./routes/exam_subject');
let	grade =require('./routes/grade');
let	level =require('./routes/level');
let	position_teacher =require('./routes/position_teacher');
let	position =require('./routes/position');
let	quesstion =require('./routes/quesstion');
let	student =require('./routes/student');
let	subject =require('./routes/subject');
let	teacher =require('./routes/teacher');
let	term =require('./routes/term');

let	test =require('./routes/test');
let	topic =require('./routes/topic');
let	answer =require('./routes/answer');
let	exam =require('./routes/exam');
let	uploadfile =require('./routes/uploadfile');
let	user  =require('./routes/user');
let	pagination  =require('./routes/pagination');
let	exam_question =require('./routes/exam_question');
let	grade_exam =require('./routes/grade_exam');
app.use("/v1/grade_exam",grade_exam);
let	examdetails =require('./routes/examdetails');
app.use("/v1/examdetails",examdetails);
app.use("/v1/test",test);
app.use("/v1/exam_subject",exam_subject);
app.use("/v1/pagination",pagination );
app.use("/v1/class",uploadfile);
app.use("/v1/class",Class);
app.use("/v1/subject",subject);
app.use("/v1/position_teacher",position_teacher);
app.use("/v1/position",position);
app.use("/v1/grade",grade);
app.use("/v1/level",level);
app.use("/v1/teacher",teacher);
app.use("/v1/student",student);
app.use("/v1/exam_question",exam_question);
app.use("/v1/topic",topic);
app.use("/v1/term",term);
app.use("/v1/quesstion",quesstion);
app.use("/v1/answer",answer);
app.use("/v1/test",test);
app.use("/v1/exam",exam);
app.use("/v1/user",user);

app.use(cors({origin: 'http://localhost:3000'}));
global.__basedir = __dirname;
const initRoutes = require("./routes/tutorial.routes");
app.use("/v1/excel",initRoutes);
const imgRoutes = require("./routes/img.routes");
app.use("/v1/img",imgRoutes);
const imgOneRoutes = require("./routes/tutorial.routesImg");
app.use("/v1/imgimg",imgOneRoutes);
const textRoutes = require("./routes/text.routes");
app.use("/v1/text",textRoutes);
db.sequelize.sync().then (() => {
  
    app.listen(PORT, ()=> {
        console.log('listening on: http://localhost:'+PORT);
    });
    
});
