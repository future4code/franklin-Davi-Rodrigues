import logo from './logo.svg';
import './App.css';
import Etapa1 from './components/Etapa1';
import { useState } from 'react';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';

function App() {
  const [contador, setContador] = useState(0)

  const escolhePg = () => {
    switch(contador){
      case 0:
        return <Etapa1 func={incrementaContador}></Etapa1>
      case 1:
        return <Etapa2 func={incrementaContador}></Etapa2>
      case 2:
        return <Etapa3 func={incrementaContador}></Etapa3>
      case 3:
        return <Final></Final>
    }
  }

  const incrementaContador = () => {
    setContador(contador + 1);
  }
  return (
    <div>
      {escolhePg()}
    </div>
  );
}

export default App;
