import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class  Sidebar extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        var id_student=localStorage.getItem("user");
        console.log(id_student);
    }
    render() {
        return (
            <div className="col-md-3 menu-left col-sm-12 col-lg-3 ">    
                <ul className="main-menu main-class-menu">
                    <li className="menu-tp active"><Link> <i className="fas fa-book-open"></i>Đề Thi<span className="caret"> </span>   </Link>
                    </li>
                </ul>
            </div>
      
        )
    }
}
export default Sidebar;
