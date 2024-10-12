import React from "react";

function ListColors({ listColor }) {
  const colorListItems = listColor.map((color, index) => (
    <li key={index}>{color}</li>
  ));
  return <ul>{colorListItems}</ul>;
}

export default ListColors;
