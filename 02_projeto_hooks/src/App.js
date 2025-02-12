import './App.css';
import P from 'prop-types';
import React, { useState, useEffect, use, useCallback } from 'react';

//Use memo faz cache dos dados da aplicação
const Button = React.memo(function Button({ icrementButton }){

  return <button onClick={() => icrementButton(10)}>+</button>
});

Button.prototype = {
  icrementButton: P.func
}

// Use callback usado em funções pesadas
// para poder nao redenrizar novamente os filhos caso as dependencias nao mudem
function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = useCallback((num) => {
    //Forma de não criar as dependencias com o counter
    setCounter((c) =>  c + num);
  }, [])

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>
        C1: {counter}
      </h1>
      <Button icrementButton={incrementCounter}/>
    </div>
  );
}

export default App;