import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';

import ListStudent from './ListStudent';
export default class Student extends Component{
    constructor(props){
      super(props);
      this.state={
          students:  [],
          item: "",
          grades:  [],
          isshowform: false,
          isshowadd:false,
          Id_student:  "",
          Id_class:   "",
          Name:  "",
          Dob:  "",
          Gender:  "",
          Address:  "",
          Phone:  "",
          item:[]
      };
    }
    formatter = new Intl.DateTimeFormat("vn", {
        year: "numeric",
        month: "long",
        day: "2-digit"
      });
    componentDidMount(){
        CallApi('v1/student','GET',null).then(res=>{
        this.setState({
          students:  res.data.details
        });
      });

    }
    showform=(data)=>{
        let items=data;
        this.setState({
          isshowform:true,
          isshowadd: false,
          Id_student:  items.Id_student,
          Id_class:   items.Id_class,
          Name: items.Name,
          Dob: items.Dob,
          Gender: items.Gender,
          Address: items.Address,
          Phone: items.phone,
        })
        console.log(items)
      }
    render(){
        var {students,isshowform, isshowadd,item}=this.state;
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
                <div className="top-title">
                    <span>
                        Danh Sách Sinh Viên
                    </span>
                    <span className="add-new">
                        Thêm Mới
                    </span>
                </div>
                <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}>
                    <i className="fas fa-home"> </i> 
                    <a href="#">Trang chủ/ </a>
                    <a href="#">Sinh Viên/ </a> 
                    <a href="#">Lớp 10/ </a> 
                    <a href="#">Chương 1</a>
                </div>
                <div className="link1">
                    <div className="col-md-12">
                        <table className="table">
                        <thead>
                        <tr>
                            <th>STT</th>
                            <th>Họ Tên </th>
                            <th>Ngày Sinh</th>
                            <th>Giới Tính</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {students.map((data,index)=>{
                                return (
                                    <tr>
                                        <td scope="row">{index+1}</td>
                                        <td className="content-cover">
                                                <span> {data.Name} </span>
                                                <div className="content-action">
                                            <span onClick={()=>this.showform(data)}>Edit</span> | 
                                            <span className="color-red" onClick={() => {if(window.confirm('Ban thật sự muốn xóa?')){ this.deleteGrade(data.Id_grade)};}}>Delete</span> | 
                                            </div>
                                        </td>
                                        <td>{data.Dob}</td>
                                        <td>{data.Gender}</td>
                                        <td>{data.Phone}</td>
                                        <td>{data.Address}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        </table>
               
                    </div>
                    <div className="col-md-10">
                      {isshowform?
                      <div>
                        <p className="text-center"> Sửa học sinh</p>
                      <form onSubmit={this.handleSubmit} className="form-controll">
                        <p>Nhập tên </p>
                        <input value={this.state.Name} type="text" name="Name" onChange={this.handleChange}/>
                        <p>Nhập ngày sinh </p>
                        <input value={this.state.Dob} name="Dob" type="date" onChange={this.handleChange}/>
                        <p>Chọn giới tính </p>
                        <input type="radio" name="Gender"   onChange={this.handleChange}/>
                        <input  type="radio" name="Gender" onChange={this.handleChange}/>
                        <p>Nhập địa chỉ </p>
                        <input value={this.state.Address} name="Address" onChange={this.handleChange}/>
                        <p>Nhập số điện thoại</p>
                        <input value={this.state.Phone} name="Phone" type="number" onChange={this.handleChange}/>
                        <button classNamw="btn btn-primary">Sửa</button>
                      </form> 
                      </div> : null
                    }
                    </div>
                </div>
            </div>
            
        )
    };
    ShowStudent(students){
        var result=null;
        if(students.length > 0 ){
            result=students.map((student,index)=>{
                return (
                    <ListStudent students={student} key={index} index={index}  />
                )
            });
        }
        return result;
    }
   
}