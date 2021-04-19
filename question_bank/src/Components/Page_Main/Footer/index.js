import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <footer className="footer-section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>THÔNG TIN CẦN BIẾT</h4>
                            <a href="#">Thông Tin</a>
                            <a href="#">Sinh Viên</a>
                            <a href="#">Điểm Thi</a>
                            <a href="#">Tra cứu kết quả</a>
                        </div>
                        <div className="col-md-4">
                            <h4>TIN MỚI NHẤT</h4>
                            <div className="d-flex justify-content-around">
                                <a href="#" className="col-4">
                                    <img src="./assets/image/g2.jpg" className="img-fluid" alt="Responsive image" />
                                </a>
                                <a href="#" className="col-4">
                                    <img src="./assets/image/g1.jpg" className="img-fluid" alt="Responsive image" />
                                </a>
                                <a href="#" className="col-4">
                                    <img src="./assets/image/g3.jpg" className="img-fluid" alt="Responsive image" />
                                </a>
                            </div>
                            <div className="d-flex justify-content-around">
                                <a href="#" className="col-4">
                                    <img src="./assets/image/cntt-min.jpg" className="img-fluid" alt="Responsive image" />
                                </a>
                                <a href="#" className="col-4">
                                    <img src="./assets/image/sv1.png" className="img-fluid" alt="Responsive image" />
                                </a>
                                <a href="#" className="col-4">
                                    <img src="./assets/image/sv3.png" className="img-fluid" alt="Responsive image" />
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <h4>ĐỊA CHỈ</h4>
                            <p>Khu II, đường 3/2, P. Xuân Khánh, Q. Ninh Kiều, TP. Cần Thơ</p>
                            <a href>Điện thoại: (84-292) 3832663</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    };  
}
export default Header;





