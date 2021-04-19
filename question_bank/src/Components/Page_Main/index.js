import React,{Component} from 'react';
import Footer from './Footer';
import Header from './Header';

class Page_Main extends Component{
    render(){
        return(
            <div>
                <Header />
                <section className="banner-btm">
                    <div className="container">
                        <div className="banner-bottom-main">
                            <div className="col-md-4">
                                <div className="banner-sub1">
                                <i className="fas fa-tasks" />
                            <h3>Ngân Hàng Đề Thi</h3>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-crown" />
                                <h3>Học Sinh</h3>
                            </div>
                            <div className="col-md-4">
                                <i className="fas fa-fire" />
                                <h3>Chính Sách</h3>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </section>
                <section className="course">
                    <div className="container">
                        <h3 className="heading">CÁC MÔN HỌC
                            <span>Nhóm học phần tự nhiên</span>
                        </h3>
                        <div className="majors">
                            <div className="card">
                                <img alt="" src="/img/g2.jpg" />
                                <div className="card-title">
                                    <h5>TOÁN HỌC</h5>
                                    <p>Cung cấp khối kiến thức về toán học, thực thi các đề thực tế qua từng bài giảng</p>
                                </div>
                            </div>
                            <div className="card">
                                <img alt="" src="/img/g3.jpg" />
                                <div className="card-title">
                                    <h5>VẬT LÝ</h5>
                                    <p>Giải bài tập vật lý đầy đủ công thức, lý thuyết, định luật, chuyên đề vật lý SGK0 giúp để học tốt vật lý</p>
                                </div>
                            </div>
                            <div className="card">
                                <img alt="" src="./img/g1.jpg" />
                                <div className="card-title">
                                    <h5>HÓA HỌC</h5>
                                    <p>Hệ thống bài giảng, câu hỏi trắc nghiệm và bài tập tự luận được thiết kế bám theo cấu trúc chương trình trong SGK Hóa Học giúp học sinh rèn luyện.</p>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </section>
                <section className="course report">
                        <section className="container">
                            <h3 className="heading">CÁC HOẠT ĐỘNG
                                <span>Sự Kiên</span>
                            </h3>
                            <section className="slider">
                                <div className="flexslider">
                                    <div className="flex-viewport">
                                        <ul className="slides">
                                            <li className="flex-slide">
                                                <img alt="" src="/img/sv1.png" />
                                                <p>Cuộc thi tin học trẻ dành cho các học sinh giỏi về máy tính</p>
                                                <div className="student">
                                                <h5>Tin Học Trẻ</h5>
                                                </div>
                                            </li>
                                            <li className="flex-slide">
                                                <img alt="" src="./assets/image/sv3.png" />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                .</p>
                                                <div className="student">
                                                <h5>Ho Lee Sheet</h5>
                                                </div>
                                            </li>
                                            <li className="flex-slide">
                                                <img alt="" src="./assets/image/sv2.png" />
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                                .</p>
                                                <div className="student">
                                                <h5>Le Thuy Tram</h5>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <ol className="control-paging">
                                        <li>
                                            <a className="dot active" onclick="currentSlide(1)">1</a>
                                        </li>
                                        <li>
                                            <a className="dot" onclick="currentSlide(2)">2</a>
                                        </li>
                                        <li>
                                            <a className="dot" onclick="currentSlide(3)">3</a>
                                        </li>
                                    </ol>
                                    <div className="clearfix" />
                                </div>
                                <div className="clearfix" />
                            </section>
                    </section>
                </section>
                {/*Footer*/}
                <Footer />
            </div>
        )
    };  
}
export default Page_Main;