import React,{Component} from 'react';
import {Link} from 'react-router-dom';
class Header extends Component{
    render(){
        return(
            <section className="header">
                <header>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-gradient-secondary " >
                            <h1>
                                <Link to="/" className="navbar-brand">Hệ Thống Quản Lý</Link>
                            </h1>
                            <button className="navbar-toggle collapsed" data-target="#bs-example-navbar-collapse-1" data-toggle="collapse" type="button">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                                <span className="icon-bar" />
                            </button>
                            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <a href="./index.html">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="#">Diễn Đàn</a>
                                    </li>
                                    <li>
                                        <a href="#">Tin Tức</a>
                                    </li>
                                    <li>
                                    <Link to="/login" >Đăng nhập</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </header>
                <div className="banner">
                </div>
            </section>
        )
    };  
}
export default Header;