import React from "react";
import "./css/StringCalculator.css";

function StringCalculator() {
  return (
    <div className="input-section">
      <input type="text" placeholder="Enter numbers" />
      <button>Calculate</button>
      <div data-testid="result"></div>
    </div>
  );
}

export default StringCalculator;
