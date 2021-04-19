import React, {Component} from 'react';
import StudentDetails from './StudentDetails';
class ListStudent extends Component{
    render(){
        var {students,index}=this.props;
        
        return (
                <StudentDetails students={students} index={index}/>
            )
    }
    
}
export default ListStudent;