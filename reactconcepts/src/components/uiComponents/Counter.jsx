import React, { useState } from "react";

function Counter({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>+</button>
      <span>{count}</span>
    </div>
  );
}

export default Counter;
