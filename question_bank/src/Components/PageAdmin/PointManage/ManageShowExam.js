import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
import {Redirect} from 'react-router-dom';
export default class ManageShowExam extends Component{
    constructor(props){
      super(props);
      this.state={
          isShowForm: false,
          grades:  [],
          redirect:  0,
          id_Grade: ""
      };
    }
    showdetails=(id)=>{
        console.log(id);
        this.setState({
            redirect:  1,
            id_Grade: id
        })
    }
    componentDidMount(){
        CallApi('v1/grade','GET',null).then(res=>{
          this.setState({
            grades: res.data.details
          })
        })
    }
    render(){
        if(this.state.redirect!==0){
            return <Redirect
            to={{
              pathname: "/admin/list-point-manage",
              state: { id: this.state.id_Grade}
            }}
           />;
            }
        var {grades}=this.state;
        return(
            <div className="col-md-19 menu-right col-sm-9">
                {grades.map(ix=>(
                    <div className="main-contents">
                    <div className="title-subjects">
                        <div className="title-class">
                            <div className="title-content">
                                {ix.Name}
                                <div className="icon" />
                                
                            </div>
                            <button className="btn btn-primary" onClick={()=>this.showdetails(ix.Id_grade)}>
                                Xem Điểm
                            </button>
                            
                        </div>
                        <div className="title-subject">
                                
                        </div>
                    </div>
                </div>     
                ))}
            </div>
        )
    };
}