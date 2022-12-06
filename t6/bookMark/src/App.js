import axios from 'axios';
import Post from './Post';
import {useState , useEffect} from 'react';


function App() {

  const [ post , setPost ] = useState([]);
const [Id , setId ] = useState(0)

if (Id === post.id) {
 
}

  useEffect(() =>{ axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setPost(res.data)})}
     , []);


  return (
<div>
  
  {post.map((post)=> <Post title={post.title} body={post.body} id={post.id}/>)}
</div>    
  );
}

export default App;