import React from "react";
import { Button } from "antd";
import "./App.css";
const App = () => {
  let [todo, setTodo] = React.useState([
    { id: 1, content: "firstContent" ,completed:false},
    { id: 2, content: "Secondcontent",completed:false },
  ]);

  const newTodo = {
    id: todo.length + 1,
    content: "",
    completed:false
  };

  const handleChange = (event) => {
    newTodo.content = event.target.value;
    
  };

  // const completeHandler=(todonew)=>{
  //   const todoCpy=[...todo];
  //   const changedTodo=todoCpy.find(eachTodo=>eachTodo.id===todonew.id);
  //   changedTodo.completed=!changedTodo.completed
  //   setTodo([...todo,changedTodo])
  // }

  const clickHandler = () => {
    setTodo([...todo, newTodo]);
    console.log(todo)
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
              <li className={eachTodo.completed===true?"line":""} key={index}> {eachTodo.content}</li>
              <div>
                <Button type="primary" onClick={() => deleteHandler(index)}>
                  delete
                </Button>
                <Button type="primary" style={{ marginLeft: "10px" }}>
                  edit
                </Button>
                <Button  type="primary" style={{marginLeft:"10px"}}>
                  completed
                </Button>
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

export default App;
