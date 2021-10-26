import {
    Link,
} from "react-router-dom";
import { useSelector } from "react-redux";


export function PostPrew() {
    const { post } = useSelector((state) => {
        return {
            post: state.todo.list,
        };
    })
    return (
        <div className="wrapper">
            {post.map((item, index) => {
                return <div className="post" key={index}>
                    <div className="post_titel">{(item.title.length > 50) ? item.title.slice(0, 50) + "..." : item.title}</div>
                    <div className="post_body">{(item.body.length > 100) ? item.body.slice(0, 120) + "..." : item.body}</div>
                    <Link to={"/post/" + item.id} className="link"></Link>
                </div>
            })}
        </div>
    )
}