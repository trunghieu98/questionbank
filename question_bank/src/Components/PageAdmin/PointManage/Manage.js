import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import ManageItemExam from './ManageItemExam';
class Manage extends Component{
  constructor(props){
    super(props);
    this.state={
      exams:  [],
      id_teacher: localStorage.getItem("admin"),
      id_exam_subject: "",
      Id_grade: this.props.location.state.id
    }
}
componentDidMount(){
    var x = localStorage.getItem("admin");
    let obj={
          id: x,
        }
    CallApi("v1/teacher/id","POST",obj).then(res=>{
      this.setState({
        exams: res.data.details,
        id_exam_subject: res.data.details.Id_exam_subject
      });
      let oj={
        Id_exam_subject: res.data.details.Id_exam_subject,
        Id_grade: this.state.Id_grade
      }   
        CallApi("v1/exam/1","POST",oj).then(res=>{
          this.setState({
            exams: res.data.details,
          });
      })
})}

    render(){
      let {exams}=this.state;
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
             <div className="link1">
              <table className="table">
                <thead>
                  <tr className="title-exam">
                    <th>STT</th>
                    <th>Xem Điểm</th>
                    <th>Ngày Tạo</th>
                  </tr>
                </thead>
                <tbody>
               {this.Showexams(exams)}
                 </tbody>
              </table>
            </div>
          </div>
          )
    };  
    Showexams(exams){
      var result=null;
      if(exams.length > 0 ){
          result=exams.map((exam,index)=>{
              return (
                  <ManageItemExam exams={exam} key={index} index={index}  />
              )
          });
      }
      return result;
    }
}

export default Manage;