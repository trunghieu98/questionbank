import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import GradeDetails from './GradeDetails';
import Grade_Edit from './GradeEdit';

class showGrade extends Component{
    render(){
       var {grades,index}=this.props;
        return(
           <GradeDetails  grades={grades} index={index} />
        )
    };  
}
export default showGrade;

