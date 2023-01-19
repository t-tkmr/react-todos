import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todo, setTodo] = useState([]);
  const [inputvalue, setInputValue] = useState("");
  //const [idnum, setIdnum] = useState(1);

  /* const idCntUp = () => {
    setIdnum(idnum + 1);
    return idnum;
  };
*/
  const clickButton = (e) => {
    e.stopPropagation();
    if (!inputvalue) return;

    setTodo((prevTodo) => {
      const buf = [...prevTodo].pop();

      let id_num = 1;
      try {
        id_num = buf.id + 1;
      } catch (err) {
        id_num = 1;
      }

      return [
        ...prevTodo,
        {
          id: id_num, // [...prevTodo].length + 1, //idCntUp(),
          value: inputvalue,
          key: uuidv4(),
          isDeleted: false,
        },
      ];
    });
    setInputValue("");
  };
  const getInput = (e) => {
    e.stopPropagation();
    setInputValue(e.target.value);
  };

  const clickDelete = (key) => {
    //const todos = [...todo];
    //const targetTask = todos.find((task) => task.key === key);
    // targetTask.isDeleted = !targetTask.isDeleted;
    console.log(key);
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
          <div className="task" key={todoitem.key}>
            <div className="taskid">{todoitem.id}</div>
            <div className="taskvalue">{todoitem.value}</div>

            <button
              className="delbtn delbtn--pink"
              onClick={clickDelete(todoitem.key)}
            >
              削除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
