import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import { useState } from 'react';
import CallBack from './components/CallBack';

function App() {
  
  const [Uicolor , setUiColor] = useState('')
  const [isColored, setIsColored] = useState(false)
  const getColor= (color)=>{
    setUiColor(color)
  }
  const toggleColor = ()=>{
    setIsColored(!isColored)
  }
  return (
    <div className='App'>
      <div className='conteneur' style={{background: isColored ? Uicolor : 'white' }}>
      <p>Couleur de fond : {isColored ? Uicolor : "Pas de couleur appliquée"}</p>
      </div>
      <CallBack isColored = {isColored} getCol = {getColor} />
      <button onClick={toggleColor}> {isColored ? 'remove color' : 'make color' } </button>
    </div>
  );
}

export default App;
