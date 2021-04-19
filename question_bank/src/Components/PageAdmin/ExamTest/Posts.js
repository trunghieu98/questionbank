import React,{Component,useState,useEffect} from 'react';
import CallApi from '../../../utils/apiCaller';
import AnsewerQuestion from './AnsewerQuestion';

const PostsExam = (props) => {
    if(props.loading){
        return <h2>Loading.....</h2>
    }
    return (
    <ul className="list-group mb-4">
           {props.posts ? props.posts.map((post,index)=>{
               console.log(post);
               return(
                   <div>
                   {post.id}
                    <AnsewerQuestion item={post} key={index} index={index} />
                    </div>
            );
           }): <h2>Loading.....</h2>}   
        </ul>
    );
}
export default PostsExam;