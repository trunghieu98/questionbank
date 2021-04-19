import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

import CallApi from "../../utils/apiCaller";
class Formlogin extends Component  {
  constructor(props){
    super(props);
    this.state={
      username:  "",
      password:  "",
      message: "",
      messageuser: "",
      messagepass: "",
      student:  false,
      redirect:  0
    };
  }
  handleInputChange =(e)=>{
    const target=e.target;
    const name=target.name;
    const value=target.type==='checkbox' ? target.checked: target.value;
    this.setState({
      [name]: value,
    })
  }
  handleSubmit=async (e)=>{
    console.log(this.state);
    e.preventDefault();
    if(this.state.username==="" && this.state.password!==""){
      this.setState({
        messageuser:  "Tên đăng nhập không được để trống",
        messagepass:  ""
      })
    }else if(this.state.username!=="" && this.state.password===""){
      this.setState({
        messageuser:  "",
        messagepass:  "Mật khẩu không được để trống"
      })
    }else if(this.state.password==="" && this.state.username===""){
      this.setState({
        messageuser:  "Tên đăng nhập không được để trống",
        messagepass:  "Mật khẩu không được để trống"
      })
    }else{
      this.setState({
        messageuser:  "",
        messagepass:  ""
      })
    }
    if(this.state.password && this.state.username){
      if(this.state.student===true){

       await CallApi('v1/user/login','Post',this.state).then(res=>{
          
          if(res!== undefined){
            localStorage.setItem("user", res.data.jwt);
            this.setState({
              redirect: 2
            })
            alert("Đăng Nhập Thành Công");
          }
          else{
            this.setState({
              message:  "Sai tên đăng nhập hoặc mật khẩu",
            })
          }
        })
      }
      else{
        CallApi('v1/user/login/teacher','Post',this.state).then(res=>{
          console.log(res);
          if(res !== undefined){
            localStorage.setItem("admin", res.data.jwt);
            this.setState({
              redirect: 1
            })
            alert("Đăng Nhập Thành Công");
          }
          else{
            this.setState({
              message:  "Sai tên đăng nhập hoặc mật khẩu",
              messageuser:  "",
              messagepass:  ""
            })
          }
        })
      }
    }
  }
  handleCancel=()=>{
    this.setState({
      redirect: 3
    })
  }
 render(){
   if(this.state.redirect===1){
    return <Redirect to="/admin" />;
   }
    if(this.state.redirect===2){
   return <Redirect to="/student" />;
   }
   if(this.state.redirect===3){
    return <Redirect to="/" />;
    }
  
  return (
    <div className="form-login">
        <div className="container-fluid backgorup-height">
          <div className="col-md-6 signin-left">
          </div>
          <div className="col-md-6 signin-right">
            <div className="form-signin">
              <div className="form-group">
                <h3 className="sign-color">Đăng Nhập</h3>
              </div>
              <div className="space">
              </div>
                  <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <div>
                        <div className="d-flex col-sm-12 mb-3">
                          {this.state.messageuser!==""? <small className="text-danger">{this.state.messageuser}</small>: null}
                          </div>
                        <input
                          type="text"
                          className="form-control form-control-md"
                          placeholder="Nhập tên đăng nhập"
                          required
                          name="username"
                          onChange={this.handleInputChange}
                        />
                        </div>
                        <div className="d-flex col-sm-12 mb-3">
                        {this.state.messagepass!==""? <small className="text-danger">{this.state.messagepass}</small>: null}
                      </div>
                      <input
                        type="password"
                        className="form-control form-control-md"
                        placeholder="Nhập mật khẩu"
                        required
                        name="password"
                        onChange={this.handleInputChange}
                      />
                       
                       <div className="form-group form-sdt">
                       <input
                        className="sd"
                        type="checkbox"
                        checked={this.state.student} 
                        name="student"
                        onChange={this.handleInputChange}
                      /> <span>Sinh Viên</span>
                       </div>
                  </div>
                  <div className="d-flex col-sm-12 mb-3">
                {this.state.message && (
                  <small className="text-danger">{this.state.message}</small>
                )}
              </div>
                  <div className="form-group">
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                      Đăng Nhập
                    </button>
                    <button type="submit" className="btn btn-warning" onClick={this.handleCancel}>
                    Hủy
                    </button>
                  </div>
                  </form>
            </div>
          </div>
        </div>
      </div>
  );
 }
}

export default Formlogin;
