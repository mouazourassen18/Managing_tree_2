import React, { useState } from "react";
import ToDo from "./ToDo";
import List from "./Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleItems(id) {
    setItems((prev) => {
      return prev.filter((index, items) => {
        index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <List
              key={index}
              id={index}
              todoItem={todoItem}
              handet={deleItems}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
