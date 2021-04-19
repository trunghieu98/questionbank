import React, { Component } from 'react';
import Gradess from './Gradess';
class Body extends Component {
    render() {
        var {item} =this.props;
        return (
            <div className="main-contents">
                <div className="title-subjects">
                    <div className="title-class">
                        <div className="title-content">
                            {item.Name}
                            <div className="icon" />
                        </div>
                    </div>
                    <div className="title-subject">
                            {this.showGrade(item)}
                    </div>
                </div>
            </div>
    )};
    showGrade(item){
        var items=item.Id_Grade;
        var result=null;
        if(items.length > 0) {
            result=items.map((item,index)=>{
                return (
                        <Gradess item={item} key={index}  />
                )
            });
        }
        return result;
    }
}
export default Body;