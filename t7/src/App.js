import "./App.css";
import { useEffect, useState } from "react";
import Heading from "./heading/Heading";
import Post from "./component/Post";
import { useRef } from "react";

function App() {
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [bookmarkId, setBookmarkId] = useState(null);
  const [searchText, setSearchText] = useState(null);
  const inp = useRef(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((res) => res.json()).then((res) => {
      setPostList(res)
      setIsLoading(false)
    })

  })



  function search(){
    setSearchText(inp.current.value);
  }


  return (
    <div dir="rtl" dangerouslySetInnerHTML={()=> {inp.current.value.style.backgroundColor='red'}}>
      <Heading />
      {isLoading ? <div className="spinner" /> : null}

      <div>

          <input ref={inp => {inp && inp.focus()} } placeholder="Search something..." />
          <button onClick={search} >search</button>

      </div>

      {postList.map((post) =>
        <Post
          id={post.id}
          title={post.title}
          body={post.body}
          bookmarkId={bookmarkId}
          setBookmarkId={setBookmarkId}
          searchText={searchText}
        />)}
     

    </div>
  );
}
export default App;