import React, { useState } from "react";
import { add, subtract, multiply, divide } from "../utils/math";

export default function Calculator() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  return (
    <div className="calculator">
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
      />
      <div className="buttons">
        <button onClick={() => setResult(add(num1, num2))}>Add</button>
        <button onClick={() => setResult(subtract(num1, num2))}>Subtract</button>
        <button onClick={() => setResult(multiply(num1, num2))}>Multiply</button>
        <button onClick={() => setResult(divide(num1, num2))}>Divide</button>
      </div>
      {result !== null && <h2>Result: {result}</h2>}
    </div>
  );
}
