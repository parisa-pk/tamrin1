import Header from '../components/header/Header';
import './app.css';
import List from '../components/list/List';
import { useState } from 'react';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneItemsLength, setDoneItemsLength] = useState(0);

  function handleAddTodo(newTodo){
    setTodoList([...todoList, newTodo])
  }

  function removeAll(){
    setDoneItemsLength(doneItemsLength + todoList.length)

    setTodoList([]);
  }

  function removeItem(todo){
    setTodoList(todoList.filter((t)=> t !== todo))

    setDoneItemsLength(doneItemsLength + 1);
  }

  return (
    <div className="container">
      <Header doneItemsLength={doneItemsLength} todoListLength={todoList.length} onRemoveAll={removeAll} onAdd={handleAddTodo} />

      <List onRemoveItem={removeItem} items={todoList}  />
    </div>
  );
}

export default App;