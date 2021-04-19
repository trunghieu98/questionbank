import React,{Component} from 'react';
import {  Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import ShowTeacherCreate from '../Quesstion/ShowTeacherCreate';
export default class ItemExam extends Component{
    formatter = new Intl.DateTimeFormat("vn", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
    constructor(props){
        super(props);
        this.state={
            redirect:  0,
            id:    "",
            status: ""
        }
    }
    showdetails=(id)=>{
        this.setState({
            redirect:  1,
            id: id
        })
    }
    handleOnclick =(id,stt)=>{
        var a=stt;
        var b="";
            if(Number(a)===0){
                b=1
            }
            else{
                b=0
            }
            let obj={
                id:id,
                stt:b
            }
            CallApi("v1/exam/update/stt/id","POST",obj).then(res=>{
                this.setState({
                    status: res.data
                })
            })
    }
    render(){
        if(this.state.redirect!==0){
          return <Redirect
          to={{
            pathname: "/admin/examdetails",
            state: { id: this.state.id }
          }}
         />;
          }
        var {exams,index}= this.props;
        let {status}=this.state;
        return(
                <tr>
                    <td scope="row">{index+1}</td>
                    <td className="content-cover">
                        <span>Mã Đề: 0{exams.id}</span>
                        <div className="content-action">
                            <span href className="color-red">Delete</span> | <span onClick={()=>this.showdetails(exams.id)} > View</span>
                        </div>
                    </td>
                    {this.showTeacher(exams.Id_teacher)}
                    <td>{exams.Time} Phút</td>
                    <td>{exams.Note}</td>
                    <td>{this.formatter.format(Date.parse(exams.createdAt))}</td>
                    <td>{this.showStatus(this.props.exams,status)}</td>
                </tr>
        )
    };
    showTeacher(Id_teacher){
        return <ShowTeacherCreate Id_teacher={Id_teacher} />
    }
    showStatus(exams,status){
        var result=<span> đang mở</span>
        if(status!==""){
            console.log(status);
            if(Number(status.data)===0){
               result=<span className="btn btn-success" onClick={()=>this.handleOnclick(exams.id,status.data)}> hoạt động</span>
            }
            else{
                result=<span className="btn btn-danger" onClick={()=>this.handleOnclick(exams.id,status.data)}> đóng</span>
            }
        }
        else{
            if(exams.stt===0){
                result=<span className="btn btn-success" onClick={()=>this.handleOnclick(exams.id,exams.stt)}>hoạt động</span>
             }
             else{
                 result=<span className="btn btn-danger" onClick={()=>this.handleOnclick(exams.id,exams.stt)}> đóng</span>
             }
        }
       
        return result
    }
}
