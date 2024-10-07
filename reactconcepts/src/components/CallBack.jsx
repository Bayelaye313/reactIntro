import React, { useState } from "react";

function CallBack({ getCol }) {
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
    </form>
  );
}

export default CallBack;
