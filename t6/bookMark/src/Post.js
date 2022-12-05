import { useEffect, useRef } from "react";

function Post({title , body}) {
    const myDiv = useRef(null);

    useEffect(mark , [])
    
    function mark() {
        myDiv.current.style.backgroundColor = 'blue'
    }
    return(<div>

        <h2>{title}</h2>
        <span>{body}</span>
        <button  onClick={mark} ref={myDiv}>Bookmark</button>

        </div>
    )
}
export default Post;