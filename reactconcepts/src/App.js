import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import { useState } from 'react';
import CallBack from './components/CallBack';
import ListColors from './ListColors';

function App() {
  
  const [Uicolor , setUiColor] = useState('')
  const [isColored, setIsColored] = useState(false)
  const [colorList, setColorList] = useState(['white'])
  const getColor= (color)=>{
    setUiColor(color)
  }
  const toggleColor = ()=>{
    setIsColored(!isColored)
  }
  const isValidColor = (color)=>{
    return CSS.supports("color", color)
  }
  const addColor = (color)=>{
    if (isValidColor(color)) {
      if (!colorList.includes(color)) {
        setColorList([...colorList, color])

      } else {
        alert('color already exist!')

      }

    } else {
    }
  }
  return (
    <div className='App'>
      <div className='conteneur' style={{background: isColored ? Uicolor : 'white' }}>
      <p>Couleur de fond : {isColored ? Uicolor : "Pas de couleur appliquée"}</p>
      <div>
      <p> list des Couleurs :</p>
      <ListColors listColor = {colorList} />

      </div>

      </div>
      <CallBack isColored = {isColored} getCol = {getColor} addCol = {addColor} />
      <button onClick={toggleColor}> {isColored ? 'remove color' : 'make color' } </button>

    </div>
  );
}

export default App;
