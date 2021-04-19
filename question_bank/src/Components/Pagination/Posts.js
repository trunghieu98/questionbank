import React from 'react';
const Posts = ({ posts , loading }) => {
    if(loading){
        return <h2>Loading.....</h2>
    }
    return (
    <ul className="list-group mb-4">
           {posts ? posts.map(post=>{
               return(
                <li key={post.id} className="list-group-item">
                {post.Name_quesstion}
            </li>);
           }): <h2>Loading.....</h2>}   
        </ul>
    );
}
export default Posts;