import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import Pagination from '../../Pagination';
import Paginations from '../../Pagination/Paginations';
import Posts from '../../Pagination/Posts';
import ItemQuesstion from './ItemQuesstion';
import {Link} from 'react-router-dom';
const ListQuesstion=(props)=>{
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  const [page,setPage]=useState(0);
  const [collection,setCollection]=useState("question");
  const [limit,setLimit]=useState(10);
  const [sortlevel,SetSort]=useState("");
  const [tim,setTim]=useState("");
  useEffect(()=>{
    fetchPosts();
  },[]);
  const fetchPosts= async()=>{
    setLoading(true);
    var x = localStorage.getItem("admin");
    let obj={
          id: x,
        }
    await CallApi("v1/teacher/id","POST",obj).then(res=>{
      
          let ob={
            Id_exam_subject: res.data.details.Id_exam_subject
          }
          if(props.location.state.id!==undefined){
            CallApi("v1/teacher/listtc/1","POST",ob).then(res1=>{
              if(res1!==undefined){
                let obt={
                  id: res1.data.details,
                  Id_grade: props.location.state.id
                }
                CallApi("v1/pagination?collection=question&limit=10","POST",obt).then(res=>{
                  // let a= res.data.post.sort(function (a, b) {
                  //   return a.Id_level -b.Id_level
                  // })
                    setPosts(res.data.post);
                    setPage(res.data.page);
                    setLoading(false);
                });
              }
        })
          }
           
    });
    
  }
  const fetchPosts1= async(name)=>{
    setLoading(true);
    var x = localStorage.getItem("admin");
    let obj={
          id: x,
        }
    await CallApi("v1/teacher/id","POST",obj).then(res=>{
      
          let ob={
            Id_exam_subject: res.data.details.Id_exam_subject
          }
          if(props.location.state.id!==undefined){
            CallApi("v1/teacher/listtc/1","POST",ob).then(res1=>{
              if(res1!==undefined){
                let obt={
                  id: res1.data.details,
                  Id_grade: props.location.state.id
                }
                CallApi("v1/pagination?collection=question&limit=10","POST",obt).then(res=>{
                  console.log("AAAAA"+name);
                  let a="";
                    if(Number(name)===1){
                      a= res.data.post.sort(function (a, b) {
                        return a.Id_level - b.Id_level
                      })
                    }else if(Number(name)===2){
                        a= res.data.post.sort(function (a, b) {
                          return b.Id_level-a.Id_level
                        })
                    }
                    setPosts(a);
                    setPage(res.data.page);
                    setLoading(false);
                });
              }
        })
          }
           
    });
    
  }
  const handleSort=e=>{
    var name=e.target.value
    console.log(name)
      SetSort(name);
      fetchPosts1(name);
  }
  
  const handleTim=(e)=>{
    e.preventDefault();
    
    if(tim!==""){
      let obj={
        name: tim
      }
        CallApi("v1/quesstion/tim/1","POST",obj).then(res=>{
          console.log(res)
        })
    }
  }
  const last=currentPage*postsPerPage;
  const first=last-postsPerPage;
  const currentPosts=posts.slice(first,last);
 
  const paginate= pageNumber => setCurrentPage(pageNumber);
  return (
    <div className="col-md-9 menu-right col-sm-12 col-lg-9">
    <div className="top-title">
      <span>
        NGÂN HÀNG CÂU HỎI
      </span>
      <Link to="add-question" className="add-new">Thêm Mới</Link>
    </div>
    <div className="text-right form-group">
      <form onSubmit={handleTim}>
        <input type="text" name="cauhoi" onChange={e=>setTim(e.target.value)}></input>
        <button className="btn btn-primary" onClick={handleTim}>Tìm</button>
      </form>
      Sắp xếp theo cấp độ
      <select className="form-controll" name="sortlevel" value={sortlevel} onChange={handleSort}> 
      <option value={0}>
        </option>
        <option value={1}>
          Dể - Khó
        </option>
        <option value={2}>
          Khó - Dể
        </option>
      </select>
    </div>
     <div className="link1">
      <table className="table">
        <thead>
          <tr className="title-exam">
            <th>STT</th>
            <th>Câu hỏi</th>
            <th>Giáo Viên</th>
            <th>Câu trả lời</th>
            <th>Cấp độ</th>
          </tr>
        </thead>
        <tbody>
        {tim!==""?
        tim.map(t=>{

        })     
        :null}
           </tbody>
        <ItemQuesstion posts={currentPosts} loading={loading} currentPage={currentPage}/>
      </table>
      <Paginations page={page} paginate={paginate}/>
    </div>
  </div>
      
  )
}
export default ListQuesstion;