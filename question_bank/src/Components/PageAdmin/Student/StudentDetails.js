import React, {Component} from 'react';
class StudentDetails extends Component{
    render(){
        var {students,index}=this.props;
        return (
                <tr>
                <td scope="row">{index+1}</td>
                <td className="content-cover">
                    <span> {students.Name} </span>
                    <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                    </div>
                </td>
                <td>{students.Dob}</td>
                <td>{students.Gender}</td>
                <td>{students.Phone}</td>
                <td>{students.Address}</td>
            </tr>
            
            )
    }

   
    
}
export default StudentDetails;