import  { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TodoList = () => {
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house", "Walk the dog"]);
  const [selectedTodoIndex, setSelectedTodoIndex] = useState(0);

  const handleTodoClick = (index) => {
    setSelectedTodoIndex(index);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

return (
  <div className="container mt-5">
    <h2 className="text-center mb-4">To-Do List</h2>
    {todos.length === 0 ? (
      <p className="text-center">No to-dos available.</p>
    ) : (
      <div>
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`list-group-item ${
                selectedTodoIndex === index ? "active" : ""
              }`}
              onClick={() => handleTodoClick(index)}
            >
              {todo}
              <button
                className="btn btn-danger btn-sm float-end"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-3">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a new todo"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  addTodo(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              className="btn btn-primary"
              onClick={() => addTodo()}
            >
              <FontAwesomeIcon icon={faPlus} /> Add
            </button>
          </div>
        </div>
      </div>
    )}
  </div>
);
            }


export default TodoList;
