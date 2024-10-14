import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1); // Mise à jour 1
    setCount((prevCount) => prevCount + 1); // Mise à jour 2
    setCount((prevCount) => prevCount + 1); // Mise à jour 3
    console.log(count); // Quelle valeur ?
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
