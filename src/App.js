import React, { useState } from "react";
import "./styles.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const appendValue = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const appendOperator = (operator) => {
    setInput((prevInput) => prevInput + operator);
  };

  const calculateResult = () => {
    try {
      setOutput(eval(input).toString());
    } catch (error) {
      setOutput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
    setOutput("");
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>

      <input type="text" value={input} readOnly />
      <div className="output">{output}</div>
      <button onClick={() => appendValue("7")}>7</button>
      <button onClick={() => appendValue("8")}>8</button>
      <button onClick={() => appendValue("9")}>9</button>
      <button onClick={() => appendOperator("+")}>+</button>
      <button onClick={() => appendValue("4")}>4</button>
      <button onClick={() => appendValue("5")}>5</button>
      <button onClick={() => appendValue("6")}>6</button>
      <button onClick={() => appendOperator("-")}>-</button>
      <button onClick={() => appendValue("1")}>1</button>
      <button onClick={() => appendValue("2")}>2</button>
      <button onClick={() => appendValue("3")}>3</button>
      <button onClick={() => appendOperator("*")}>*</button>
      <button onClick={() => clearInput()}>C</button>
      <button onClick={() => appendValue("0")}>0</button>
      <button onClick={() => calculateResult()}>=</button>
      <button onClick={() => appendOperator("/")}>/</button>
    </div>
  );
};

export default Calculator;
