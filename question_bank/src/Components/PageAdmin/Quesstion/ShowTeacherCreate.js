import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
export default class ShowTeacherCreate extends Component{
    constructor(props){
        super(props);
        this.state={
            teachers: ""
        }
    }
    componentDidMount(){
        let obj={
            id: this.props.Id_teacher
        }
        CallApi("v1/teacher/1","POST",obj).then(res=>{
            this.setState({
                teachers: res.data.details.Name
            })
        })
    }
    render(){
      var {Id_teacher}=this.props;
        return(
              <td className="content-cover">
                    {this.state.teachers}
               </td>
        )
    };
    
  }