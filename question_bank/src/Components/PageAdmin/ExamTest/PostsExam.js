import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';
const PostsExam = ({posts,loading, currentPage}) => {
    if(loading){
        return <h2>Loading.....</h2>
    }
    return (
    <ul className="list-group mb-4">
           {posts ? posts.map((post,index)=>{
               var item=post.Id_Quesstion;
               return(
                <tbody>
                    <div className="question"> Câu {showIndex(index,currentPage)}: {post.Name_quesstion}</div>
                    <AnsewerQuestion item={item} key={index} index={index}/>
                </tbody>
            );
           }): <h2>Loading.....</h2>}   
        </ul>
    );  
}
const showIndex=(index,currentPage)=>{
        var result=null;
        if(currentPage===1){
           result=index+1*currentPage;
        }
        else{
            result=index+1+(currentPage-1)*10;
        }
    return result;
}
export default PostsExam;