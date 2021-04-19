import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
export default class Showstudent extends Component{
    constructor(props){
        super(props);
        this.state={
            students: ""
        }
    }
    componentDidMount(){
        let obj={
            id: this.props.Id_student
        }
        CallApi("v1/student/1","POST",obj).then(res=>{
            this.setState({
                students: res.data.details.Name
            })
        })
    }
    render(){
      var {Id_student}=this.props;
        return(
              <td className="content-cover">
                    {this.state.students}
               </td>
        )
    };
    
  }