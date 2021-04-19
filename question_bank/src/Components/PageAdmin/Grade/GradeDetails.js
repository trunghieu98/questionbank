import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Grade_Edit from './GradeEdit';

class GradeDetails extends Component{
    constructor(props){
        super(props);

    }
    render(){
       var {grades,index}=this.props;
        return(
            <tbody>
                <tr>
                    <td scope="row">{index+1}</td>
                    <td className="content-cover">
                        <span>
                        {grades.Name}
                        </span>
                    <div className="content-action">
                        <span  >Edit</span> | 
                        <span className="color-red">Delete</span> | 
                        <span >View</span>
                    </div>
                    </td>
                </tr>
            </tbody>
           
        )
    };  
}
export default GradeDetails;

