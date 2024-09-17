import React from 'react';
import './App.css';
import { useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function App() {
  const [toDos, setToDos] = useState([]);
  const updateList = () => {
    const input = document.getElementById('input');
    const newList = input.value;
    if(input.value === '') {
      alert('Please enter a task');
    }
    else {
      setToDos([...toDos, newList]);
      input.value = '';
    }
  }
  const deleteList = (index) => {
    setToDos(toDos.filter((_, i) => i !== index));
  }
  return (
    <div className='container'>
      <h2>TO Do App</h2>
      <div className="underLine"></div>
      <div className="containent">
        <div className='inputFeild'>
          <input type="text" id='input' placeholder='Enter a task'/>
          <button onClick={updateList}><IoIosAddCircle className='icon'/></button>
        </div>
        <div className="output">
          <ul>
            {toDos.map((todo, index) => <li key={index}>{todo} <button onClick={() => deleteList(index)}><MdDelete /></button></li>)}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
