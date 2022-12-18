import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
    
    
    function Comment(){


    const [comment, setComment] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments/`).then((res) => res.json())
            .then((res) => {
                setComment(res)
            })
    }, [])

    return(
        <div>
              <h2>{comment.name}</h2>
            <p>{comment.body}</p>
    
        </div>
    )
}
export default Comment;