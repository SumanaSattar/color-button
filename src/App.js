
import {useState} from 'react';
import './App.css';
import React from 'react';

function App() {
  const [buttonColor, setButtonColor] = useState('red')
  const buttonHandler = buttonColor ==='red'?'blue':'red';
  return (
    <div>
      <button onClick={()=>{
        setButtonColor(buttonHandler)
      }} style={{backgroundColor:buttonColor}}>Change to {buttonHandler}</button>
    </div>
  );
}

export default App;
