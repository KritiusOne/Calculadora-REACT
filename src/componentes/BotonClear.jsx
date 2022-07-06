import React from "react";
import '../STYLE-SHEET/botonClear.css'

const BotonClear = ({children, clear})=>{
    return(
        <div 
        className='boton-clear'
        onClick={clear}>
            {children}
        </div>
    );
}
export default BotonClear;