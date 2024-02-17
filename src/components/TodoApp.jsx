import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { addTodo, removeTodo } from "../assets/features/todos/todoSlice";
import "./TodoApp.scss";

function TodoApp() {
  const [inputVal, setInputVal] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const AddTodo = () => {
    dispatch(addTodo(inputVal));
    setInputVal("");
  };

  const DeleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  return (
    <>
      <input
        type="text"
        value={inputVal}
        placeholder="text"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={() => AddTodo()}>Add To do </button>

      {/* <h1>All todo list</h1> */}
      <div className="col">
        {todos.map((data, index) => {
          return (
            <>
              <div className="row">
                <h1>{data.text}</h1>
                <button onClick={() => DeleteTodo(data.id)}>
                  <DeleteIcon />
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default TodoApp;
