import './App.css';

//import { useState } from 'react';
import React, { useState } from 'react';

function App() {

  const [resultado, setResultado] = useState(null);

  const title = <h1 className='titleApp'>Hola trolos!</h1>


  const pushedButton = () => {
    const result = sum(7, 5);
    setResultado(result);
  };

  return <div> <div>{title}</div>
    <div className='App'><button onClick={pushedButton}>PushMe!!</button></div>
    <div className='App'>{resultado != null &&<h2>El resultado es: {resultado}</h2>}</div>
  </div>
}

function sum(a, b) {
  return a + b;
}

export default App;
