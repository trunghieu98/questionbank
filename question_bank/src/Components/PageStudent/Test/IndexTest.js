import React,{Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import StudentHeader from '../StudentHeader';
import Menu from '../Menu';
import CallApi from '../../../utils/apiCaller';
import moment from 'moment';
class IndexTest extends Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            Id_exam: "",
            password: "",
            redirect: 0,
            Stt_exam: 0,
            message: "", 
            Id_test: "",
            Time: 0,
            time_pr: 0
        }
        
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        CallApi("v1/exam/create/post","POST",this.state).then(res=>{
            if(res !== undefined ){
                 localStorage.setItem("stt",res.data.stt);
                this.setState({
                    Time: res.data.Time,
                    time_pr: res.data.Time,
                })
               if(res.data.code ===undefined){
                if(localStorage.getItem('time_start')!==null && localStorage.getItem('time_process')!==null){
                    localStorage.setItem("time_pr",this.state.time_pr);
                    let time_process=JSON.parse(localStorage.getItem('time_process'));
                    let time_start={
                        time_start: moment().lang('vi').format('YYYY-MM-DD HH:mm:ss'),
                        timedt: moment().lang('vi').unix()
                    }
                    let obj_process=time_process.timedt-time_start.timedt;
                    if(obj_process<0){
                        this.setState({
                            redirect: 0,
                            message: "Đề thi chỉ được thực hiện một lần... "
                        })
                    }
                    else{
                        localStorage.setItem("time_pr",this.state.time_pr);
                        localStorage.setItem("time_end",JSON.stringify(obj_process));
                        this.setState({
                            redirect: 1,
                            Id_test: res.data.user.id
                        })
                    }
                }
                else{
                    localStorage.setItem("time_pr",this.state.time_pr);
                    let obj={
                        time_start: moment().lang('vi').format('YYYY-MM-DD HH:mm:ss'),
                        timedt: moment().lang('vi').unix()
                    }
                    let obj_after={
                        time_end: moment().lang('vi').add(this.state.Time, 'minute').format('YYYY-MM-DD HH:mm:ss'),
                        timedt: moment().lang('vi').add(this.state.Time, 'minute').unix()
                    }
                    let obj_process=obj_after.timedt-obj.timedt;
                    localStorage.setItem("time_start",JSON.stringify(obj));
                    localStorage.setItem("time_process",JSON.stringify(obj_after));
                    localStorage.setItem("time_end",obj_process);
                    this.setState({
                        redirect: 1,
                        Id_test: res.data.user.id
                    })
                }
               
               }
               else{
                this.setState({
                    message: "Đề thi chỉ được thực hiện một lần... "
                })
               }
            }
            else{
                this.setState({
                    message: "Sai thông tin vui lòng kiểm tra lại"
                })
            }
        })
    }
    render(){
        if(this.state.redirect!==0){
            localStorage.setItem('Id_exam',this.state.Id_exam);
            return <Redirect
            to={{
              pathname: "/student/test-start",
              state: { Id_user: localStorage.getItem('user'),
                        Id_exam: this.state.Id_exam,
                        Id_test: this.state.Id_test,
                        Time: this.state.Time
            }
            }}
           />;
            }
        return(
                <div className="class-backgroup">
                    <StudentHeader />
                 <div className="container">
                 <Menu />
                 <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <form onSubmit={this.handleSubmit} className="form-exam">  
                    <div className="panel panel-default">
                        <div className="panel-heading"> 
                                <h3 className="panel-title text-center">Kiểm Tra</h3> 
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Mã Đề</label>
                        <input type="text" required name="Id_exam"  className="form-control"  onChange={this.handleChange} min="0" Max="100"/>
               
                    </div>
                    <div className="form-group">
                        <label>Số thứ tự</label>
                        <input type="number" required name="Stt_exam"  className="form-control"  onChange={this.handleChange} />
               
                    </div>
                    <div className="form-group">
                        <label>Mật Khẩu</label>
                        <input type="password" required name="password" className="form-control"  onChange={this.handleChange} />
                    </div>
                    <div className="d-flex col-sm-12 mb-3">
                {this.state.message && (
                  <small className="text-danger">{this.state.message}</small>
                )}
              </div>
                    <button onClick={this.handleSubmit} type="button" className="btn btn-primary">Xác Nhận</button>
                </form>
          </div>
                 </div>
                
                </div>
        )
    };  
}
export default IndexTest;