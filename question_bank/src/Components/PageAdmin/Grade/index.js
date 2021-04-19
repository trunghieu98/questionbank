import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
import GradeDetails from './GradeDetails';
import Grade_Edit from './GradeEdit';
import ShowGrade from './ShowGrade';
class Grade extends Component{
    constructor(props){
      super(props);
      this.state={
          item: "",
          grades:  [],
          isshowform: false,
          id_khoi: "",
          name_khoi:"",
          isshowadd:false,
          newname:""
      };
    }
    handleEdit=(item)=>{
      console.log(item)
        CallApi(`v1/grade/${item.Id_grade}`,"GET",null).then(res=>{
          this.setState({
            item: res.data.grade
          })
        })
    }
    componentDidMount(){
        CallApi('v1/grade','GET',null).then(res=>{
          this.setState({
            grades: res.data.details
          })
        })
    }
    showform=(id,name)=>{
      console.log(id);
      this.setState({
        isshowform:true,
        isshowadd: false,
        id_khoi:id,
        name_khoi:name
      })
    }
    showadd=()=>{
       this.setState({
        isshowform:false,
        isshowadd:true
       })
    }
    handleChange=(e)=>{
      this.setState({
        [e.target.name]:[e.target.value]
      })
    }
    handleChangeadd=(e)=>{
      this.setState({
        [e.target.name]:[e.target.value]
      })
    }
    handleSubmitadd=(e)=>{
      e.preventDefault();
      
      if(this.state.newname===""){
        alert("không được để trống");
      }else{
        let obj={
          Name:this.state.newname[0]
        }
            CallApi('v1/grade','POST',obj).then(res=>{
              alert("thêm thành công");
              this.setState({
                isshowadd:false,
                grades: res.data.details
              })
            })
      }
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      
      if(this.state.name_khoi===""){
        alert("không được để trống");
      }else{
        let obj={
          name:this.state.name_khoi[0],
          id:this.state.id_khoi
        }
        CallApi("v1/grade/update","POST",obj).then(res=>{
          if(res!==undefined){
            alert("sửa thành công")
            CallApi('v1/grade','GET',null).then(res=>{
              this.setState({
                isshowform:false,
                grades: res.data.details
              })
            })
          }
        })
      }
    }
    deleteGrade=(id)=>{
      console.log(id);
      let obj={
        Id_grade: id
      }
      CallApi("v1/grade/move","DELETE",obj).then(res=>{
        this.setState({
          grades: res.data.details
        })
      })
    }
    render(){
        var {grades,isshowform,name,isshowadd}=this.state;
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
            <div className="top-title">
              <span>
                DANH SÁCH KHỐI
              </span>
              <span className="add-new" onClick={this.showadd}>
                Add New
              </span>
            </div>
             <div className="link1">
                <div className="row" >
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                                <tr>
                                <th style={{width: '20px'}}>STT</th>
                                <th>Tên</th>
                                </tr>
                            </thead>
                          <tbody>
                            {grades.map((data,index)=>{
                                return (
                                      <tr>
                                        <td scope="row">{index+1}</td>
                                        <td className="content-cover">
                                          <span>
                                            {data.Name}
                                          </span>
                                          <div className="content-action">
                                            <span onClick={()=>this.showform(data.Id_grade,data.Name)}>Edit</span> | 
                                            <span className="color-red" onClick={() => {if(window.confirm('Ban thật sự muốn xóa?')){ this.deleteGrade(data.Id_grade)};}}>Delete</span> | 
                                          </div>
                                        </td>
                                      </tr>
                                )
                            })}
                          </tbody>
                        </table>
                    </div>
                    <div className="col-md-6">
                      {isshowform?
                      <div div class="form-ai">
                        <p className="text-center"> Sửa khôi</p>
                      <form onSubmit={this.handleSubmit} className="form-controll">
                        <p>Nhập tên </p>
                        <input value={this.state.name_khoi} name="name_khoi" onChange={this.handleChange}/>
                        <button classNamw="btn btn-primary">Sửa</button>
                      </form> 
                      </div> : null
                    }
                    {isshowadd?<div div class="form-ai">
                        <p className="text-center"> Sửa khôi</p>
                      <form onSubmit={this.handleSubmitadd} className="form-controll">
                        <p>Nhập tên mới </p>
                        <input name="newname" onChange={this.handleChangeadd}/>
                        <button classNamw="btn btn-primary" onClick={this.handleSubmitadd}>Thêm</button>
                      </form> 
                      </div> : null}
                    </div>
                </div>
            </div>
   
          </div>
        )
    };  
}
export default Grade;