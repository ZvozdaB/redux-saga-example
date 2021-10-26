import React, { useEffect, useState } from "react";
import {
    Link,
    useParams
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { todoActions } from "../store/todo/actions";
import {Comment} from './Coment.js'

function PostDetails() {
    const dispatch = useDispatch();
    const {posts,comments} = useSelector(state =>{
        return {
            posts: state.todo.list,
            comments: state.todo.commentList
        }
    } );
    const { id } = useParams();
    let [post, setPost] = useState({id:3})
    

    useEffect(() => {setPost(posts.find(item => item.id === +id))}, [id]);
   

    
    

    return (
        <div className={"article"}>
            <nav className={"nav"} >
                <Link className={"btn"} to={(post.id !== 1) ? "/post/" + (post.id - 1) : "/"}><span>&lt;</span> Previous</Link>
                <Link className={"btn"} to="/">Home</Link>
                <Link className={"btn"} to={(post.id !== 100) ? "/post/" + (post.id + 1) : "/"}>Next <span>&gt;</span></Link>
            </nav>
            <div className={"title"}>{post.title}</div>
            <div className={"text"}>{post.body}</div>
            <div className="comment_titel"> Koментарі:</div>
            <div className={"btn comment__btn"} onClick={() => dispatch(todoActions.getComments(post.id))}> Завантажити </div>
            {comments[0].postId == id && comments.map(item =>{ return <Comment name={item.name} email={item.email} text={item.body} key={item.id}/>})}
            
        </div>



    );
}
export default PostDetails;