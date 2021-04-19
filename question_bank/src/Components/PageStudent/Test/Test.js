import React,{Component,useState,useEffect} from 'react';
import Paginations from '../../Pagination/Paginations';
import { useLocation } from 'react-router-dom';
import CallApi from '../../../utils/apiCaller';
import PostsExam from './PostsExam';
import StudentHeader from '../StudentHeader';
const Test=(props)=>{
  const location = useLocation();
  const [posts,setPosts]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [postsPerPage]=useState(10);
  const [page,setPage]=useState(0);
  const [collection,setCollection]=useState("question");
  const [limit,setLimit]=useState(10);
  const [ch,setCh]=useState(0);
  const [len,setLen]=useState(0);
  const [exam,setExam]=useState(location.state.Id_test);
  useEffect(()=>{
    const currentPath = location.state;
    const fetchPosts= async()=>{
      let obj={
        id: currentPath.Id_test
      }
      console.log(obj)
      setLoading(true);
      await CallApi("v1/exam_question/add-examdetails/question","POST",obj).then(res=>{
        console.log(obj)
              if(res!==undefined){
                var str="";
              obj={
                Id_quesstion: []
              }
              if(res){
                res.data.examdetails_question.map(id=>{
                  setCh(id.Stt_answer);
                    obj.Id_quesstion.push(id.Id_quesstion);
                })
              }
              console.log(obj);
              CallApi("v1/quesstion/id","POST",obj).then(ress=>{
                console.log(ress.data.details);
                setLen(ress.data.details.length);
                setPosts(ress.data.details);
               })
               setLoading(false);
               setPage(4);
              }
      })
    }
    fetchPosts();
  },[]);  
  const last=currentPage*postsPerPage;
  const first=last-postsPerPage;
  const currentPosts=posts.slice(first,last);
  const paginate= pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="class-backgroup">
    <StudentHeader />
    <div className="container">
    <div className="col-md-9 menu-right col-sm-12 col-lg-9">
       <div className="link1">
        <table className="table">
          <thead>
            <tr>
              <th  className="text-center">Bắt Đầu Kiểm Tra</th>
            </tr>
          </thead>
           <PostsExam key={paginate} posts={currentPosts} loading={loading} currentPage={currentPage} index={currentPage} len={len} ch={ch} exam={exam}/>
           <Paginations page={page} paginate={paginate}/>
        </table>
      </div>
    </div>
    </div>
</div>
    
   
      
  )

}
export default Test;
