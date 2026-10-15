import { useState } from "react";

import "./App.css";

const GRID_SIZE = 9;

function App() {
  //create empty array with 9 elements to show box
  const [numbers, setNumbers] = useState<number[]>(Array(GRID_SIZE).fill(0));

  const handleClick = (index: number) => {
    setNumbers((prevState) => {
      const nextState = [...prevState];

      // get max numer from array
      const maxCurrentNumber = Math.max(...prevState);
      //increase max number value and assign on array index with new value
      nextState[index] = maxCurrentNumber + 1;

      return nextState;
    });
  };

  const clearHandler = () => {
    setNumbers(Array(GRID_SIZE).fill(0));
  };

  return (
    <>
      <section className="grid-container">
        <div className="grid">
          {numbers.map((number, index) => {
            const isSelected = number !== 0;
            return (
              <button
                className={`grid-btn ${isSelected ? "selected" : ""}`}
                key={index}
                type="button"
                onClick={() => handleClick(index)}
                disabled={isSelected}
              >
                {number || ""}
              </button>
            );
          })}
        </div>
        <div>
          <button type="reset" className="clear-btn" onClick={clearHandler}>
            Clear
          </button>
        </div>
      </section>
    </>
  );
}

export default App;
