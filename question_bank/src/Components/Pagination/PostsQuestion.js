import React from 'react';
const PostsQuestion=({posts,loading})=>{
    if(loading){
        return <h2>Loading.....</h2>
    }
    return (
        <tbody>
           {posts ? posts.map(post=>{
               return(
                <tr>
                <td scope="row">{post.id}</td>
                <td className="content-cover">
                    <span>{post.Name_quesstion}</span>
                    <div className="content-action">
                        <a href>Edit</a> | <a href className="color-red">Delete</a> | <a href="#">View</a>
                    </div>
                </td>
                <td>
                   
                </td>
                    <td>{post.createdAt}</td>
            </tr>);
           }): <h2>Loading.....</h2>}   
      
           </tbody>
    );
}
export default PostsQuestion;