import React from "react";

function App() {
  const [item, setItem] = React.useState("");
  const [list, createList] = React.useState([]);

  function handleChange(event) {
    const newItem = event.target.value;
    setItem(newItem);
  }

  function addItem(event) {
    createList((prevItems) => {
      return [...prevItems, item];
    });
    setItem("");
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={item} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {list.map((listItem) => (
            <ToDoItem text={listItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
