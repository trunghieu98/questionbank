import React,{Component} from 'react';
    import ItemPDF from './ItemPDF.js';
    import CallApi from '../../../utils/apiCaller';
    import {Link} from 'react-router-dom';
    import { useLocation } from 'react-router-dom';
export default class ListPDF extends Component{
  constructor(props){
    super(props);
    this.state={
      exams:  [],
    }
}
componentDidMount(){
   let obj={
       id:   localStorage.getItem("Id_examdt")
   }
   CallApi("v1/examdetails","POST",obj).then(details=>{
     console.log(details);
     if(details){
       this.setState({
         exams: details.data.details
       })
     }
   })
}
render(){
  var {exams,id_exam_subject}=this.state;

  console.log(this.state.id_exam_subject);
    return(
      <div className="col-md-9 menu-right col-sm-12 col-lg-9">
     <div className="link1">
        <table className="table">
          <thead>
            <tr className="title-exam">
              <th>STT</th>
              <th>Mã Đề</th>
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
              <ItemPDF exams={exam} key={index} index={index}  />
          )
      });
  }
  return result;
}
}
