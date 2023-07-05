import React, { useState } from "react";
import "./Style/App.css";

function App() {
  const [item, setItem] = useState("");
  const [todo, setTodo] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);

  const inputChange = (event) => {
    setItem(event.target.value);
  };

  const handleSubmit = () => {
    if (item.trim() !== "") {
      setTodo((prevItem) => [...prevItem, item]);
      setItem("");
    }
  };

  const handleDelete = (index) => {
    setTodo((prevItem) => {
      const updatedItems = [...prevItem];
      updatedItems.splice(index, 1);
      return updatedItems;
    });
  };

  const handleCheckboxChange = (index) => {
    const selectedTodo = todo[index];
    setCompletedItems((prevCompletedItems) => [
      ...prevCompletedItems,
      selectedTodo,
    ]);
    handleDelete(index);
  };

  return (
    <div>
      <div className="searchConatiner">
        <input
          type="text"
          onChange={inputChange}
          value={item}
          placeholder="Enter Item"
          className="inputSearch"
        />
        <button onClick={handleSubmit} className="btn">
          Submit
        </button>
      </div>
      <div className="listConatiner">
        <ul>
          {todo.map((listItems, index) => (
            <li key={index}>
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(index)}
              />
              <h3>{listItems}</h3>
              <button onClick={() => handleDelete(index)} className="btn">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      {completedItems.length > 0 && <hr />}
      <div className="checkedItem">
        <ul>
          <h2>Listed Item</h2>
          {completedItems.map((completedItem, index) => (
            <li key={index}>
              <input type="checkbox" checked={true} />
              <h3>{completedItem}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
