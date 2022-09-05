import './App.css';
import React, { useState , useEffect } from 'react';
import Form from './components/Form';
import Display from './components/Display';

function App() {
  const [currentTask, setCurrentTask] = useState([]);
  const [currentDone, setCurrentDone] = useState(false);

  const [list, setList] = useState([]);

  useEffect(() => {
    console.log(localStorage)
    const list = JSON.parse(localStorage.getItem('list'));
    if (list) {
      setList(list);
    }
  }, [])

  const requestedTask = ( newTask, newDone ) => {
    setCurrentTask( newTask );
    setCurrentDone ( newDone )
    setList([ ...list, {'task': newTask, 'done': newDone} ])
    localStorage.setItem('list', JSON.stringify([ ...list, {'task': newTask, 'done': newDone} ]))
  }

  const filterListFct = (deleteIdx) => {
    const filteredList = list.filter((eachItem, i) => i !== deleteIdx) 
    setList(filteredList)
  }

  return (
    <div className="App">
      <Form onNewTask = { requestedTask }/>
      {/* on submit above, the function requestColor is called */}
      <Display task={ currentTask } list={list} setList={setList} onDelete = {filterListFct}/>
    </div>
  );
}

export default App;
