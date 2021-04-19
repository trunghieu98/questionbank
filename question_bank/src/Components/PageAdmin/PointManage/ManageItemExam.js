import React,{Component} from 'react';
import {  Redirect } from "react-router-dom";
import { Link } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import ShowTeacherCreate from '../Quesstion/ShowTeacherCreate';
export default class ManageItemExam extends Component{
    formatter = new Intl.DateTimeFormat("vn", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
    constructor(props){
        super(props);
        this.state={
            redirect:  0,
            id:    ""
        }
    }
    showdetails=(id)=>{
        this.setState({
            redirect:  1,
            id: id
        })
    }
   
    render(){
        if(this.state.redirect!==0){
          return <Redirect
          to={{
            pathname: "/admin/manage-details",
            state: { id: this.state.id }
          }}
         />;
          }
        var {exams,index}= this.props;
        return(
                <tr>
                    <td scope="row">{index+1}</td>
                    <td className="content-cover">
                        <span>Mã Đề: 0{exams.id}</span>
                        <div className="content-action">
                            <a href>Edit</a> | <a href className="color-red">Delete</a> | <span onClick={()=>this.showdetails(exams.id)} > View</span>
                        </div>
                    </td>
                    <td>{this.formatter.format(Date.parse(exams.createdAt))}</td>
              
                </tr>
        )
    };
}
