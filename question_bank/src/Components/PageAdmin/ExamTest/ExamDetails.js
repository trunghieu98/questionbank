import React,{Component,useState,useEffect} from 'react';
import Paginations from '../../Pagination/Paginations';
import AnswerQuestion from './AnsewerQuestion';
import { useLocation } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import PostsExam from './PostsExam';



const ExamDetails=()=>{
  const location = useLocation();
  const [createExam,setCreateExam]=useState(false);
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  const [page,setPage]=useState(0);
  const [collection,setCollection]=useState("question");
  const [limit,setLimit]=useState(10);
  const [number,setNumber]=useState("");
  useEffect(()=>{
    const currentPath = location.state;
    const fetchPosts= async()=>{
      let obj={
        id: currentPath.id
      }
      setLoading(true);
      await CallApi("v1/exam_question","POST",obj).then(res=>{
             
              var str="";
              obj={
                Id_quesstion: []
              }
              if(res){
                res.data.exam_question.map(id=>{
               
                    obj.Id_quesstion.push(id.Id_quesstion);
                })
              }
              console.log(obj);
              CallApi("v1/quesstion/id","POST",obj).then(ress=>{
              
                setPosts(ress.data.details);
              
               })
               setLoading(false);
               setPage(4);
      })
    }
    fetchPosts();
  },[]);  
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPath = location.state;
      let obj={
        id: currentPath.id,
        number: number
    }
    CallApi("v1/exam/create/xam","POST",obj).then(res=>{
            console.log(res);
    });

    setCreateExam(false); 
    alert( "Tạo thành công");
  }
  const last=currentPage*postsPerPage;
  const first=last-postsPerPage;
  const currentPosts=posts.slice(first,last);
  const paginate= pageNumber => setCurrentPage(pageNumber);

  const handleCreateExam=()=>setCreateExam(true);   
  
  return (
    
    <div className="col-md-9 menu-right col-sm-12 col-lg-9">
      {/* <div className="top-title">
        <span>
          Quản Lý Đề Thi
        </span>
        <span className="add-new">
          Add New
        </span>
        <span className="add-new">
          Import
        </span>
      </div> */}
      <div className="back-link" style={{backgroundColor: '#ffff', margin: 0}}><i className="fas fa-home"> </i> <a href="#">Trang chủ/ </a><a href="#">Địa lý/ </a><a href="#">Đề Thi</a></div>
      <div className="link1">
        <table className="table">
          <thead>
            <tr>
              <th  className="text-center">Dề Thi</th>
              <th> <button className="btn btn-warning" onClick={handleCreateExam}>Cho Thi Online</button></th>
              {createExam?
               <div>
                <form onSubmit={ handleSubmit } onChange={(e) => setNumber(e.target.value)}>
                  <p>Nhập số lượng đề</p>
                  <input type="number" name="examnumber"/>
                  <button className="btn-danger">Tạo</button>
                </form>
               </div> : null}
            </tr>
          </thead>

           <PostsExam posts={currentPosts} loading={loading} currentPage={currentPage}/>
           <Paginations page={page} paginate={paginate}/>
      
        </table>
      </div>
    </div>
      
  )

}
export default ExamDetails;

    
