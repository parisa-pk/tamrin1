import axios from 'axios';
import Post from './Post';
import {useState , useEffect} from 'react';



function App() {


  const[post , setPost] = useState([])

  useEffect(() => axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setPost(res.data)
      console.log(res.data);}) , [])


  return (
<div>
  {post.map((post)=> <Post title={post.title} body={post.body}/>)}
</div>    
  );
}

export default App;