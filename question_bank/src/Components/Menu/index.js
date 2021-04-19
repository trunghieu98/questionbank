import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import CallApi from '../../utils/apiCaller';

class  Sidebar extends Component {
    constructor(props){
        super(props);
        this.state={
            quyen:  0,
            id_teacher: localStorage.getItem("admin"),
        }
        
    }
    componentDidMount(){
        let obj={
            id: localStorage.getItem("admin"),
        }
        CallApi("v1/teacher/1","POST",obj).then(res=>{
             if(res!==undefined){
                 this.setState({
                     quyen:res.data.details.role
                 })
             }
        })
    }
    render() {
        return (
            <div className="col-md-3 menu-left col-sm-12 col-lg-3 ">    
                <ul className="main-menu">
                    <li className="menu-tp active"><Link to ="/admin/list"> <i className="fas fa-book-open"></i> Quản Lý Đề Thi<span className="caret"> </span>   </Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list">Danh Sách Đề Thi<span className="caret"> </span></Link></li>
                            <li><Link to="/admin/add-exam" >Thêm Đề Thi</Link></li>
                            <li><a href="# ">Chỉnh Sửa Đề Thi</a></li>
                        </ul>
                    </li>
                    
                    <li className="menu-tp"><Link to ="/admin/add-question"><i className="fas fa-question-circle"></i> Quản Lý Ngân Hàng Câu Hỏi<span className="caret"> </span></Link>
                        <ul className="sub-menu">
                            <li><Link to ="/admin/list-question">Danh Sách Câu Hỏi<span className="caret"> </span>   </Link></li>
                            <li><Link to="/admin/add-question" >Thêm Câu Hỏi</Link></li>
                          
                        </ul>
                    </li>
                    <li className="menu-tp"><Link to="/admin/point-manage"><i className="fas fa-user-graduate"></i>Quản Lý Điểm Sinh Viên</Link> </li>
                    <li className="menu-tp"><Link to="/admin/list-student" ><i className="fas fa-user-graduate"></i> Học Sinh</Link>
                       
                    </li>
                    <li className="menu-tp"><Link to="/admin/mark-exam" ><i className="fas fa-address-card"></i> Chấm Điểm</Link>
                    </li>
                 
                      <li className="menu-tp"><Link to="/admin/show-view" ><i className="fas fa-chalkboard-teacher"></i> Xem đề thi đã chấm </Link></li>
                    
                    <li className="menu-tp"><Link to="/admin/exports-pdf" ><i className="fas fa-address-card"></i> Export </Link></li>
                    {this.state.quyen===1?
                     <li className="menu-tp"><span  ><i className="fas fa-chalkboard-teacher"></i>Giáo Viên </span></li>
                     : null
                    }
                     {this.state.quyen===1?
                      <li className="menu-tp"><Link to="/admin/show_garde" ><i className="fas fa-chalkboard-teacher"></i> Khối </Link></li>
                     : null
                    }
                   
                </ul>
            </div>
      
        )
    }
}
export default Sidebar;
