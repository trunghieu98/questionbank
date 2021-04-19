import React,{Component} from 'react';
import ReactDOMServer from 'react-dom/server';
import CallApi from '../../../utils/apiCaller';
import Form from './Form';
import TaskList from './TaskList';
import { Link, Redirect } from "react-router-dom";
export default class FormImport extends React.Component {
  constructor(props){
    super(props);
  }
  state={
    Id_teacher:  localStorage.getItem('admin'),
    Time: "",
    Pass: "",
    Note: "",
    Id_exam: [{Id_topic: "",de: "",tb: "",kho: ""}],
    topic: [],
    redirect: false,
    Id_exam_subject:this.props.location.state.Id_es,
    Id_grade:this.props.location.state.Id_grade

  }
  
  handleChange=(e)=>{
    if (["de", "tb", "kho", "Id_topic"].includes(e.target.name)) {
      let Id_exam = [...this.state.Id_exam]
      Id_exam[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }
addNewRow = (e) => {
    this.setState((prevState) => ({
    Id_exam: [...prevState.Id_exam, { Id_topic: "",de: "", tb: "", kho: "" }],
  }));
}
deleteRow=(index)=>{
  this.setState({
    Id_exam: this.state.Id_exam.filter((s,sindex)=>index !== sindex),
  });
}
handleSubmit=async(e)=>{
  let data=this.state;
  e.preventDefault();
  console.log(data);
  if(this.state.Time===""){
    alert("không được để trống")
  }
  else{
    await CallApi("v1/exam","POST",data).then(res=>{
      if(res!==undefined){
        console.log(res.data);
        alert("123")
        this.setState({
          redirect: true
        })
        alert("Thêm thành công")
      }else{
        alert("loi");
      }
    })
  }
}
clickOnDelete(record) {
    this.setState({
    Id_exam: this.state.Id_exam.filter(r => r !== record)
    });
  }
  componentDidMount(){
    let obj={
      Id_es: this.props.location.state.Id_es,
      Id_grade: this.props.location.state.Id_grade
    }
    console.log(obj);
    CallApi("v1/topic/1","POST",obj).then(res=>{
      this.setState({
          topic: res.data.details
      });
  })
 }
    render(){
      let {Id_exam,topic}=this.state;
  
      console.log(Id_exam);
      if(this.state.redirect){
        return <Redirect to="/admin/list" />;
      }
      return(
        <div className="col-md-9 menu-right col-sm-12 col-lg-9">

          <form onSubmit={this.handleSubmit} onChange={this.handleChange} className="form-exam">  
          <div className="panel panel-default">
              <div className="panel-heading"> 
                    <h3 className="panel-title text-center">Tạo Đề Thi</h3> <div className="btn btn-primary " onClick={this.addNewRow} > Thêm Chương</div>
              </div>
              </div>
              <div className="form-group">
                <label>Thời Gian</label>
                <input type="text" required name="Time" id="Time" className="form-control" />
              </div>
              <div className="form-group">
                <label>Mật Khẩu</label>
                <input type="password" required name="Pass" id="Pass" className="form-control" />
              </div>
              <div className="form-group">
                <label>Mô Tả</label>
                <textarea  required name="Note" id="Note" className="form-control"></textarea>
              </div>
              <table className="table">
                  <thead>
                    <tr>
                      <th className="text-center">Chương</th>
                      <th className="text-center">Số câu dể</th>
                      <th className="text-center">Số câu trung bình</th>
                      <th className="text-center">Số câu khó </th>
                    </tr>
                  </thead>
                  <tbody>
                  <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} Id_exam={Id_exam} topic={topic} />
                  </tbody>
                 
              </table>
              <div><button type="submit" onClick={this.handleSubmit} className="btn btn-primary text-center">Submit</button></div>
              </form>
        </div>  
      )
    }
}
