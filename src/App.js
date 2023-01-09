import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const clickButton = (e) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: uuidv4(), value: inputvalue }];
    });
    setInputValue("");
  };
  const getInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <input value={inputvalue} onChange={getInput}></input>
      <button onClick={clickButton}>追加</button>
      <div>
        {todo.map((todoitem) => (
          <>
            <div> {todoitem.id}</div>

            <div> {todoitem.value}</div>
          </>
        ))}
      </div>
    </div>
  );
}
export default App;
