import "./App.css"
import PostAdd from './PostAdd';
import Post from './Post';
import {useState} from 'react';
function App() {
  const [isPostSubmitted, setIsPostSubmitted] = useState(false);
  const [postContent, setPostContent] = useState(null)
  const [onvanPer, setOnvanPer] = useState(null)
  const [onvanEng, setOnvanEng] = useState(null)
  const [writer, setWriter] = useState(null)
  const [date, setDate] = useState(null)
  const [age, setAge] = useState(null)
  const [cat, setCat] = useState(null)

  function handleOnPostSubmitted(newPostContent, newOnvanEng , newOnvanPer, newAge, newWriter  , newDate, newCat){
    setPostContent(newPostContent);
    setOnvanPer(newOnvanPer);
    setOnvanEng(newOnvanEng);
    setDate(newDate);
    setAge(newAge);
    setWriter(newWriter);
    setCat(newCat)
    setIsPostSubmitted(true);
  }

  return (
    <div className="container">
      {
        isPostSubmitted
          ? <Post writer={writer} cat={cat} onvanPer={onvanPer} onvanEng={onvanEng} age={age} date={date} content={postContent} />
          : <PostAdd onPostSubmitted={handleOnPostSubmitted} />
      }
    </div>
  );
}

export default App;