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
  let mantenimiento = [...actual];

  const agregarInput = (e)=>{
    setActual(actual + e);
  }
  const aggOperator = (e)=>{
    if(actual && !anterior && !operator){
      setOperator(operator + e);
      setAnterior(actual);
      setActual('');
    }else{
      if(anterior && actual && operator){
        calcularResultado();
      }
      if(anterior && !operator){
        setOperator(e);
      }
    }
  }
  const aggPunto = (e)=>{
    let aux = mantenimiento.filter((x) => x=== '.');
    if(aux.length === 0){
      setActual(actual + e);
    }
  }
  const calcularResultado = () => {
    if(actual && anterior){
      setAnterior(evaluate(anterior+operator+actual));
      setOperator('');
      setActual('');
    }
  }
  const clear = () =>{
    setActual('');
    setAnterior('');
    setOperator('');
  }
  const clearSelectivo = ()=>{
    if(actual){
      mantenimiento = mantenimiento.slice(0,-1);
      let ayuda = mantenimiento.join('');
      setActual(ayuda);
    }else if(operator){
      setOperator('');
      setActual(anterior);
      setAnterior('');
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
