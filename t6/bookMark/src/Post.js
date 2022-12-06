import { useEffect , useRef } from "react";

function Post({title ,id , body}) {
    const myDiv = useRef(null);

    useEffect(mark , []);
    
    function mark() {
        
        myDiv.current.style.backgroundColor = 'blue'
    }
   
    return(<div>

        <h2>{title}</h2>
        <span>{id}</span>
        <span>{body}</span>
        <button ref={myDiv} onClick={mark} >Bookmark</button>

        </div>
    )
}
export default Post;