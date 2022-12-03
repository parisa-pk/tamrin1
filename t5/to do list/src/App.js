import './App.css';
import Navbar from './Navbar.mjs';
import Sidebar from './Sidebar.js';
import Content from './Content.js'
function App() {
  return (
<div>
    <Navbar text='My beautiful website'/>
    <div className='container'>
    
     <Sidebar text1='Google' text2='WikiPedia' text3='Amazon' side1='https://www.google.com/' side2='https://www.wikipedia.com/' side3='https://www.amazon.com/'/>
<Content con=' An “about me” section is a brief segment in your resume that highlights who you are as a professional, describes your greatest strengths and showcases your greatest professional accomplishments.'/>
    </div>
    </div>
  );
}

export default App;