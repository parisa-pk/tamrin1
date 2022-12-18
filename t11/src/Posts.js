import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
export default function Posts() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((res) => res.json()).then((res) => {
                setPost(res)
            }
            )
    }, [])


    if (post === null) return <div>Loading...</div>

    return (
        <div>
            <h2>Posts</h2>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <Outlet />
        </div>
    )
}
