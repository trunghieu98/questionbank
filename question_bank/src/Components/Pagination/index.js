import React,{Component,useState,useEffect} from 'react';
import axios from 'axios';
import Posts from './Posts';
import CallApi from '../../utils/apiCaller';
import PostsQuestion from './PostsQuestion';
import Paginations from './Paginations';
const Pagination=({collection,limit})=>{
      const [posts,setPosts]=useState([]);
      const [loading,setLoading]=useState(false);
      const [currentPage,setCurrentPage]=useState(1);
      const [postsPerPage]=useState(10);
      const [page,setPage]=useState(0);
      console.log(collection);
      console.log(limit);
      useEffect(()=>{
        const fetchPosts= async()=>{
          setLoading(true);
          await CallApi(`v1/pagination?collection=${collection}&limit=${limit}`,"GET",null).then(res=>{
              setPosts(res.data.post);
              setPage(res.data.page);
              setLoading(false);
          });
        }
        fetchPosts();
      },[]);
    
      const last=currentPage*postsPerPage;
      const first=last-postsPerPage;
      const currentPosts=posts.slice(first,last);
      const paginate= pageNumber => setCurrentPage(pageNumber);
      return (
        <div>
          {/* <Posts posts={currentPosts} loading={loading} />
            <Paginations page={page} paginate={paginate}/> */}
        </div>
      )
}
export default Pagination;