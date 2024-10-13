import React, { useState } from "react";
import { sculptureList } from "./Data";

function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function prevtem(params) {
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }
  function seeMore() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <button onClick={prevtem}>Prev</button>

      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <br />
      <button onClick={seeMore}>
        {" "}
        {showMore ? "Hide" : "Show"} description
      </button>

      <p>{showMore && sculpture.description}</p>
    </div>
  );
}

export default Gallery;
