import React, { useState } from "react";
import "./css/StringCalculator.css";
import { add } from "./stringCalculator";

function StringCalculator() {
  const [numbers, setNumbers] = useState("");
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    try {
      setResult(add(numbers));
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter numbers"
        value={numbers}
        onChange={(e) => setNumbers(e.target.value)}
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div data-testid="result">{result}</div>
    </div>
  );
}

export default StringCalculator;
