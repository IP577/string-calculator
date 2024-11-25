import React from "react";

function StringCalculator() {
  return (
    <div>
      <input type="text" placeholder="Enter numbers" />
      <button>Calculate</button>
      <div data-testid="result"></div>
    </div>
  );
}

export default StringCalculator;
