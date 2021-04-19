import React,{Component} from 'react';
import { Link, Redirect } from "react-router-dom";
import CallApi from '../../../utils/apiCaller';
export default class FormQuestion extends Component{
    constructor(props){
        super(props);
        this.state={
            Id_teacher:  localStorage.getItem('admin'),
            file:   "",
            Time: "",
            Pass: "",
            Note: "",
            redirect: false
        }
    }
    handleChange=(e)=>{
          this.setState({ [e.target.name]: e.target.value })
      }
      filehandler=(event)=>{
        this.setState({ file: event.target.files[0] });
          let fileObj=event.target.files[0];
      }
      handleSubmit=e=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', this.state.file);
        formData.append('Id_teacher', this.state.Id_teacher);
        formData.append('Time', this.state.Time);
        formData.append('Pass', this.state.Pass);
        formData.append('Note', this.state.Note);
        // CallApi("v1/excel/upload","POST",formData).then(res=>{
        //     this.setState({
        //         redirect: true
        //     })
        // })     
      }
    render(){
        if(this.state.redirect){
            return <Redirect to="/admin/list-question" />;
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
