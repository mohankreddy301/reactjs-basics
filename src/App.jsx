import React, { useEffect } from "react";
import "../src/App.css";
import { useState } from "react";
import { users } from "../src/data.js";

const App = () => {
  const [count, updateCount] = useState(0);
  const [isButtonDisable, setDisbleState] = useState(true);
  const [inputValue, setInputValue] = useState(0);
  const [desc, setdesc] = useState("");

  const handleClick = () => {
    const value = 100000 * inputValue;
    setdesc(`The cost of one iPhone 16 is ${value}, for ${count} quantity`);
  };

  const updateDisableStatus = (e) => {
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, "");
    setDisbleState(!digitsOnly);
    setInputValue(digitsOnly);
    updateCount(digitsOnly);
    setdesc(inputValue > 0 ? desc : "");
  };

  return (
    <div className="home-container">
      <Images />
      <h1>Welcome Jagan</h1>
      <p id="count"></p>
      <input
        type="text"
        placeholder="Enter numbers of products"
        onChange={updateDisableStatus}
        inputMode="numeric"
        pattern="[1-9]*"
        value={inputValue}
      />

      <p hidden={desc.length > 0 ? false : true}>{desc}</p>
      <button className="btn" onClick={handleClick} disabled={isButtonDisable}>
        Click Me to update
      </button>
    </div>
  );
};

// export default App;

function Images() {
  const [result, setResult] = useState("");
  const [activeButton, setActiveButton] = useState("Map");

  const performOperation = (e) => {
    setActiveButton(e);
    let value;
    switch (e) {
      case "Includes":
        value = users.map((item) => {
          return item.age < 30;
        });
        console.log(value);
        break;
      case "Find":
        value = users.find((item) => {
          return item.name.includes("Isha");
        });
        console.log(value);
        setResult(value.name);
        break;
      case "Filter":
        value = users.filter((item) => {
          return item.age < 25;
        });
        console.log(value);
        setResult(value.name);
        break;

      default:
        value = users.map((item) => {
          const name = `${item.name}`;
          return name;
        });
        console.log(value);
        setResult(value.join(","));
    }
  };

  return (
    <div className="buttons-container">
      <div className="js-basics">
        <button
          className={`btn ${activeButton === "Map" ? "active" : ""}`}
          onClick={() => performOperation("Map")}
        >
          Map
        </button>

        <button
          className={activeButton === "Find" ? "active" : ""}
          onClick={() => performOperation("Find")}
        >
          Find
        </button>
        <button
          className={activeButton === "Filter" ? "active" : ""}
          onClick={() => performOperation("Filer")}
        >
          Filter
        </button>
        <button
          className={activeButton === "Some" ? "active" : ""}
          onClick={() => performOperation("Some")}
        >
          Some
        </button>
        <button
          className={activeButton === "Every" ? "active" : ""}
          onClick={() => performOperation("Every")}
        >
          Every
        </button>
        <button
          className={activeButton === "Includes" ? "active" : ""}
          onClick={() => performOperation("Includes")}
        >
          Includes
        </button>
        <button
          className={activeButton === "IndexOf" ? "active" : ""}
          onClick={() => performOperation("IndexOf")}
        >
          IndexOf
        </button>
        <button
          className={activeButton === "FindIndex" ? "active" : ""}
          onClick={() => performOperation("FindIndex")}
        >
          FindIndex
        </button>
      </div>
      <p>
        The current event Name is <strong>{activeButton}</strong>{" "}
      </p>
      <p hidden={result.length > 0 ? false : true}>
        The result of <strong>{activeButton}</strong> is{" "}
        <strong>{result}</strong>
      </p>
    </div>
  );
}

const Home = () => {
  return (
    <div>
      <App />
    </div>
  );
};
export default Home;
