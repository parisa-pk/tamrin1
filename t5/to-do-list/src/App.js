import {useState} from 'react'
function App() {
const[tasks, setTask] = useState([]);
function Add() {
  const newTask = prompt('What do you want to add?');
  setTask([...tasks,newTask]);
}
function remove(task) {
  setTask(task.filter((t)=> t !== task))
}

return (
<div>
   
   <div>
    <button onClick={Add}>Add</button>
   </div>

<ul>

  {
    tasks.map((each)=><li>{each} <button onClick={() => remove(each)} >Remove</button></li>)
  }

</ul>

    </div>
  );
}

export default App;