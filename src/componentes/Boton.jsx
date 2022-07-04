import React from "react";
import '../STYLE-SHEET/boton.css'
const esOperador = (children)=>{
    return isNaN(children) && (children != '.') && (children != '=')
}
function Boton(props){
    return (
      <div className={`boton-contenedor ${esOperador(props.children) ? 'Operador' : ''}`.trimEnd()}
      onClick={() =>props.manejarClic(props.children)}>
        {props.children}
      </div>  
    );
}

export default Boton;   