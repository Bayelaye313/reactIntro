import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Welcome from './components/Welcome';
import { useState } from 'react';
import CallBack from './components/CallBack';

function App() {
  
  

  const [Uicolor , setUiColor] = useState(0)
  const getColor= (color)=>{
    setUiColor(color)
  }
  return (
    <div className='App'>
      <div className='conteneur' style={{background:`${Uicolor}` }}>
      </div>
      <CallBack getCol = {getColor} />
    </div>
  );
}

export default App;
