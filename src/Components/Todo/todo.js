import React from "react";
import { Button } from "antd";

const TodoComponent = () => {
  let [todo, setTodo] = React.useState([
    { id: 1, content: "firstContent", completed: false, clicked: 0 },
    { id: 2, content: "Secondcontent", completed: false, clicked: 0 },
  ]);

  const newTodo = {
    id: todo.length + 1,
    content: "",
    completed: false,
    clicked: 0,
  };

  React.useEffect(() => {
    localStorage.setItem("todo", todo);
    console.log(localStorage.getItem("todo"));
  }, [todo]);

  const handleChange = (event) => {
    newTodo.content = event.target.value;
  };

  const completeHandler = (index) => {
    const todoCpy = [...todo];
    todoCpy[index].completed = !todoCpy[index].completed;
    todoCpy[index].clicked = todoCpy[index].clicked + 1;
    setTodo(todoCpy);
  };

  const clickHandler = () => {
    setTodo([...todo, newTodo]);
    console.log(todo);
  };

  const deleteHandler = (id) => {
    const cpyTodo = todo;
    cpyTodo.splice(id, 1);
    setTodo([...cpyTodo]);
    console.log("---->", cpyTodo);
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <h1>Todo Application</h1>

      <ul>
        {todo.map((eachTodo, index) => {
          return (
            <div
              style={{
                flexDirection: "row",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <li
                style={{
                  textDecoration:
                    eachTodo.completed === true ? "line-through" : "",
                }}
                key={index}
              >
                {eachTodo.content}
              </li>
              <div>
                <Button type="primary" onClick={() => deleteHandler(index)}>
                  delete
                </Button>
                <Button
                  onClick={clickHandler}
                  type="primary"
                  style={{ marginLeft: "10px" }}
                >
                  edit
                </Button>
                <Button
                  onClick={() => completeHandler(index)}
                  type="primary"
                  style={{ marginLeft: "10px" }}
                >
                  completed
                </Button>
                <span style={{ marginLeft: "5px" }}>{eachTodo.clicked}</span>
              </div>
            </div>
          );
        })}
      </ul>

      <input onChange={handleChange} />
      <button onClick={clickHandler}>Add todo </button>
    </div>
  );
};

export default TodoComponent;
