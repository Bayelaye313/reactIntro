import React, { useState } from "react";

function CallBack({ getCol, isColored, addCol }) {
  const [color, setColor] = useState("");

  const handleChange = (ev) => {
    ev.preventDefault();
    const { value } = ev.target;
    setColor(value);
    console.log("val", value);
    getCol(value);
    if (value.length > 2) {
      addCol(value);
    }
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
