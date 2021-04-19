import React, { Component } from 'react';
import CallApi from '../../../utils/apiCaller';
import Body from './Body';
class Menu_body extends Component {
    constructor(props){
        super(props);
        this.state={
            items: []
        };
    }
    componentDidMount(){
        CallApi('v1/grade','GET',null).then(res=>{
           this.setState({
               items: res.data.details
           });
       });
    }
    render() {
        var {items} =this.state;
        return (
            <div className="col-md-10 menu-right col-sm-12 ">
                <div className="top-title">
                    <span>
                        NGÂN HÀNG CÂU HỎI
                    </span>
                    <span className="add-new">
                        Add New
                    </span>
                </div>
                <div className="back-link" style={{ backgroundColor: '#ffff', margin: 0 }}><i className="fas fa-home"> </i> <a
                        href=" #">Trang chủ/</a><a href=" #">Thông
                        Tin</a>
                </div>
                <div className="link1">
                        {this.showGrades(items)}
                </div>
            </div>
    )};
    showGrades(items){
        var result=null;
        if(items.length > 0) {
            result=items.map((item,index)=>{
                return (
                        <Body item={item} key={index}  />
                )
            });
        }
        return result;
    }
}
export default Menu_body;