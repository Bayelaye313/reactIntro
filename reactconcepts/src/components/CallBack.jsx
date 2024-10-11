import React, { useState } from "react";

function CallBack({ getCol, isColored }) {
  const [color, setColor] = useState("");

  const handleChange = (ev) => {
    const { value } = ev.target;
    setColor(value);
    console.log("val", value);
    getCol(value);
  };
  return (
    <form>
      <label htmlFor="">
        Enter color:
        <input type="text" value={color} onChange={handleChange} />
      </label>
      <p>La couleur sélectionnée est : {color}</p>
      <p>
        {isColored
          ? "La couleur sera appliquée."
          : "La couleur ne sera pas appliquée."}
      </p>
    </form>
  );
}

export default CallBack;
