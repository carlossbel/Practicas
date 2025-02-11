import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css"; 
import "./App.css"; 

const getRandomColor = () => {
  const colors = ["#e95151", "#e99c51", "#e9e951", "#99e951", "#51e989", "#51e9e7", "#516fe9", "#9751e9", "#e951c1"];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [elements, setElements] = useState([]);

  const addElement = () => {
    const newElement = {
      id: Date.now(),
      color: getRandomColor(),
    };
    setElements([...elements, newElement]);
  };

  const clearElements = () => {
    setElements([]);
  };

  const removeElement = (id) => {
    setElements(elements.filter((element) => element.id !== id));
  };

  return (
    <div className="container">
      <h2>
        <i></i> Manipulate DOM - Beltran Angeles Carlos Amador - IDGS10
      </h2>
      <div className="buttons">
        <button onClick={addElement}>
          <i className="bi bi-plus-circle"></i> Add element to DOM
        </button>
        <button onClick={clearElements}>
          <i className="bi bi-trash"></i> Clear DOM
        </button>
      </div>

      <div className="elements-container">
        {elements.map((element) => (
          <div
            key={element.id}
            className="element-box"
            style={{ backgroundColor: element.color }}
            onClick={() => removeElement(element.id)}
          >
            <span>Element <i className="bi bi-stars"></i></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
