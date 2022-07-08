import './App.css';
import Boton from './componentes/Boton.jsx'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [anterior, setAnterior] = useState('')
  const [actual, setActual] = useState('');
  const [operator, setOperator] = useState('');
  const [punto, setPunto] = useState(true);

  const agregarInput = (e)=>{
    setActual(actual + e);
  }
  const aggOperator = (e)=>{
    if(actual && !anterior && !operator){
      setOperator(operator + e);
      setAnterior(actual);
      setActual('');
      setPunto(true);
    }else{
      if(anterior && actual && operator){
        calcularResultado();
      }
    }
  }
  const aggPunto = (e)=>{
    if(punto){
      setActual(actual + e);
      setPunto(false);
    }
  }
  const calcularResultado = () => {
    if(actual && anterior){
      setActual(evaluate(anterior+operator+actual));
      setOperator('');
      setAnterior('');
      !actual.includes('.') ? setPunto(true) : setPunto(false);
    }
  }
  const clear = () =>{
    setActual('');
    setAnterior('');
    setOperator('');
    setPunto(true);
  }
  const clearSelectivo = ()=>{
    if(actual){
      setActual(actual.slice(0, -1));
    }else if(operator){
      setOperator('');
    }else if(anterior){
      setAnterior(anterior.slice(0, -1));
    }
  }
  return (
    <div className='App'>
      <div className='App-calc'>
        <Pantalla 
        actual={actual}
        opd={operator}
        anterior={anterior}/>
        <section className='app-calc-keypad'>
          <Boton manejarClic = {agregarInput}>1</Boton>
          <Boton manejarClic = {agregarInput}>2</Boton>
          <Boton manejarClic = {agregarInput}>3</Boton>
          <Boton manejarClic = {aggOperator}>+</Boton>
          
          <Boton manejarClic = {agregarInput}>4</Boton>
          <Boton manejarClic = {agregarInput}>5</Boton>
          <Boton manejarClic = {agregarInput}>6</Boton>
          <Boton manejarClic = {aggOperator}>-</Boton>
          
          <Boton manejarClic = {agregarInput}>7</Boton>
          <Boton manejarClic = {agregarInput}>8</Boton>
          <Boton manejarClic = {agregarInput}>9</Boton>
          <Boton manejarClic = {aggOperator}>*</Boton>
          
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic = {agregarInput}>0</Boton>
          <Boton manejarClic = {aggPunto}>.</Boton>
          <Boton manejarClic = {aggOperator}>/</Boton>
          <BotonClear clear={clear}>Clear</BotonClear>
          <BotonClear clear={clearSelectivo}>C</BotonClear>
        </section>
        
      </div>
    </div>
  );
}

export default App;
