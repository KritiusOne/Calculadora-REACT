import React from "react";
import '../STYLE-SHEET/botonClear.css'

const BotonClear = ({children, manejarClear})=>{
    return(
        <div 
        className='boton-clear'
        onClick={manejarClear}>
            {children}
        </div>
    );
}
export default BotonClear;