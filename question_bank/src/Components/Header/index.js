import React,{Component} from 'react';
import {Link,Redirect } from 'react-router-dom';

class Header extends Component{
    logOut=()=>{
      localStorage.clear();
      return <Redirect to="/" />
    }
    render(){
        return (
            <header>
              <div className="container">
              <nav className="navbar navbar-default backgroup" role="navigation">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
                <Link to="/admin" className="navbar-brand"> <i className="fas fa-home" /> Hệ Thống Quản Lý Đề Thi </Link>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav navbar-right navbar-color">
                <li className="dropdown">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Khối 10</a>
                </li>
                <li className="dropdown ">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Khối 11</a>
                </li>
                <li className="dropdown ">
                     <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Khối 12</a>
                </li>
                <li className="dropdown">
                  <a href="# " className="dropdown-toggle color" data-toggle="dropdown">Admin<b className="caret" /></a>
                  <ul className="dropdown-menu">
                    <li><Link to="/" onClick={this.logOut}>
                    <i className="fas fa-sign-in-alt"></i> Log Out
                    </Link></li>
                    <li><a href="# "> <i className="fas fa-user-circle"></i> Profile</a></li>
                  </ul>
                </li>
              </ul>
            </div>{/* /.navbar-collapse */}
          </nav>
        
            </div>
            </header>
        )};
}
export default Header;