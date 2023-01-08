import "./App.css";

import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  const [v, setV] = useState("");
  const clickButton = (e) => {
    setTodo((prevTodo) => {
      return [...prevTodo, { id: 1, value: v }];
    });
  };
  const getInput = (e) => {
    setV(e.target.value);
  };

  return (
    <div className="App">
      <input value={v} onChange={getInput}></input>
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
