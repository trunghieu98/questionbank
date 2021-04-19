import React,{Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import CallApi from '../../../utils/apiCaller';
export default class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            Id_teacher:  localStorage.getItem('admin'),
            file:   "",
            Time: "",
            Pass: "",
            Note: "",
            redirect: false,
            Id_exam_subject: "",
            Id_grade: this.props.location.state.Id_grade
      
        }
    }
    
    handleChange=(e)=>{
          this.setState({ [e.target.name]: e.target.value })
      }
      filehandler=(event)=>{
        this.setState({ file: event.target.files[0] });
          let fileObj=event.target.files[0];
      }
      handleSubmit= async (e)=>{
      
        e.preventDefault();
       if(this.state.file==="" || this.state.Time==="" ||  this.state.Note===""  ||this.state.Pass===""){
            alert("không được để trống")
       }else{
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('Id_teacher', this.state.Id_teacher);
        formData.append('Time', this.state.Time);
        formData.append('Pass', this.state.Pass);
        formData.append('Note', this.state.Note);
        formData.append('Id_exam_subject', this.state.Id_exam_subject);
        formData.append('Id_grade', this.state.Id_grade);
       await CallApi("v1/excel/upload","POST",formData).then(res=>{
            if(res===undefined){
                alert("thêm lỗi")
            }
            else{
                alert("thêm thành công");
                this.setState({
                    redirect: true
                })
            }
        })     
       }
      }
      componentDidMount(){
        var x = localStorage.getItem("admin");
        let obj={
              id: x,
            }
            console.log(obj);
            CallApi("v1/teacher/id","POST",obj).then(res=>{
              this.setState({
                Id_exam_subject: res.data.details.Id_exam_subject
              })
            })
      }
    render(){
       
        if(this.state.redirect){
            return <Redirect to="/admin/list" />;
          }
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <form onSubmit={this.handleSubmit}  className="form-exam">  
                    <div className="panel panel-default">
                        <div className="panel-heading"> 
                                <h3 className="panel-title text-center">Import File</h3> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Thời Gian</label>
                        <input type="text" required name="Time" id="Time" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" required name="Pass" id="Pass" className="form-control" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Mô Tả</label>
                        <textarea  required name="Note" id="Note" className="form-control" onChange={this.handleChange} ></textarea>
                    </div>
                        <div className="form-group">
                            <label>Chọn File</label>
                            <input type="file" name="file" id="file"   className="form-control" onChange={this.filehandler.bind(this)}/>
                        </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Xác Nhận</button>
                </form>
          </div>
        )
    };
  
}
