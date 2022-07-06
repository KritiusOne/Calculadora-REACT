import React from "react";
import '../STYLE-SHEET/boton.css'
const esOperador = (children)=>{
    return isNaN(children) && (children !== '.') && (children !== '=')
}
function Boton({manejarClic, children}){
    return (
      <div className={`boton-contenedor ${esOperador(children) ? 'Operador' : ''}`.trimEnd()}
      onClick={() =>manejarClic(children)}>
        {children}
      </div>  
    );
}

export default Boton;   