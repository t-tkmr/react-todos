import "./App.css";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todoList, setTodoList] = useState([]);
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

    setTodoList((prevTodo) => {
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

  const clickDelete = (e) => {
    const todos = [...todoList];

    const targetTask = todoList.find((task) => task.key === e);
    targetTask.isDeleted = true;
    //setTodoListを使って、isDeletedを更新できるように修正
    //console.log(e);

    setTodoList(todos.filter((todo) => todo.isDeleted === false));
  };

  return (
    <div className="App">
      <div className="inputarea">
        <div>
          <input
            className="input"
            value={inputvalue}
            onChange={(e) => getInput(e)}
          ></input>
        </div>
        <div>
          <button className="btn btn--orange btn--radius" onClick={clickButton}>
            追加
          </button>
        </div>
      </div>
      <div className="outarea">
        {todoList.map((todoitem) => (
          <div className="task" key={todoitem.key}>
            <div className="taskid">{todoitem.id}</div>
            <div className="taskvalue">{todoitem.value}</div>

            <button
              className="delbtn delbtn--pink"
              onClick={() => clickDelete(todoitem.key)}
              //onClick={function() {clickDelete(todoitem.key)}}
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
