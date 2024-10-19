import React, { useEffect, useState } from "react";

function Article({ title, children }) {
  function convertSecondsToHMS(seconds) {
    // Calcul des heures
    const hours = Math.floor(seconds / 3600);
    // Calcul des minutes restantes
    const minutes = Math.floor((seconds % 3600) / 60);
    // Calcul des secondes restantes
    const remainingSeconds = seconds % 60;

    // Formatage pour avoir toujours 2 chiffres pour les heures, minutes, et secondes
    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    // Retourner le format HH:MM:SS
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
  const [ellapsedTime, setEllapsedtime] = useState(0);

  useEffect(() => {
    console.log("mounted");
    const intervalId = setInterval(() => {
      console.log("interv", intervalId);
      setEllapsedtime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2> {title} </h2>
      <p>{convertSecondsToHMS(ellapsedTime)}</p>
      {children}
    </div>
  );
}

export default Article;
