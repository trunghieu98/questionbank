import React,{Component} from 'react';
import CallApi from '../../../utils/apiCaller';
class ShowView extends Component{
    constructor(props){
      super(props);
      this.state={
        deall:[],
        dechitiet:[],
        isshowform:false
      };
    }
  
    componentDidMount(){
        CallApi('v1/grade_exam/hienthi/baithitoanbo','GET',null).then(res=>{
            console.log(res)
          this.setState({
                deall:res.data.details
          })
        })
    }
    handleshow=(id)=>{
        let obj={
            id: id
        }
        CallApi('v1/grade_exam/hienthi/baithi','POST',obj).then(res=>{
            console.log(res)
            this.setState({
                dechitiet:res.data.details,
                isshowform:true
            })
        })
    }
    render(){
        var {deall,isshowform,dechitiet}=this.state;
        console.log(deall)
        return(
            <div className="col-md-9 menu-right col-sm-12 col-lg-9">
            <div className="top-title">
              <span>
                    Danh sách đề thi
              </span>
             
            </div>
             <div className="link1">
                <div className="row" >
                    <div className="col-md-6">
                        <table className="table">
                            <thead>
                                <tr>
                                <th style={{width: '20px'}}>STT</th>
                                <th>mã đề</th>
                                <th>Hiển thị</th>
                                </tr>
                            </thead>
                          <tbody>
                            {deall!==[] ?deall.map((data,index)=>{
                                return (
                                      <tr>
                                        <td scope="row">{index+1}</td>
                                        <td className="content-cover">
                                          <span>
                                            0{data.made}
                                          </span>

                                        </td>
                                        <td><span class="btn btn-success" onClick={()=>this.handleshow(data.made)}>Xem</span></td>
                                      </tr>
                                )
                            }):null}
                          </tbody>
                        </table>
                    </div>
                    <div className="col-md-12">
                      {isshowform? 
                      <div>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Mã Học Sinh</th>
                                    <th scope="col">Bài thi</th>
                                    <th scope="col">Điểm số</th>
                                {/* <th scope="col">H</th> */}
                            </tr>
                            </thead>
                            <tbody>
                            {dechitiet.map((ct,index)=>{
                                    return(
                                        <tr>
                                            <th scope="row">{ct.Id_student}</th>
                                            <td><img src={"/img/Ketqua/"+ct.url}/></td>
                                            <td>{ct.diem}</td>
                                        </tr>
                                    )
                            })}
                              
                            </tbody>
                        </table>    
                        </div> : null}
                    </div>
               
                </div>
            </div>
   
          </div>
        )
    };  
}
export default ShowView ;