import React, { Component } from 'react';
class Gradess extends Component {
    render() {
        var {item} =this.props;
        return (
            <div className="content-sub">
               <span>{item.Name}</span>
            </div>
        )};
}
export default Gradess;