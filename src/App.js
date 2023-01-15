import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  const [idnum, setIdnum] = useState(1);

  const idCntUp = () => {
    setIdnum(idnum + 1);
    return idnum;
  };

  const clickButton = (e) => {
    setTodo((prevTodo) => {
      return [
        ...prevTodo,
        {
          id: idCntUp(),
          value: inputvalue,
          key: uuidv4(),
        },
      ];
      // console.log(prevTodo);
    });
    setInputValue("");
  };
  const getInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="App">
      <div className="inputarea">
        <div>
          <input
            className="input"
            value={inputvalue}
            onChange={getInput}
          ></input>
        </div>
        <div>
          <button className="btn btn--orange btn--radius" onClick={clickButton}>
            追加
          </button>
        </div>
      </div>
      <div className="outarea">
        {todo.map((todoitem) => (
          <div key={todoitem.key}>
            <div>
              {todoitem.id}
              {todoitem.value}

              <button>削除</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
