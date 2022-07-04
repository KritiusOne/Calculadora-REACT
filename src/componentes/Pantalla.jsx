import React from "react";
import '../STYLE-SHEET/pantalla.css'

const Pantalla = (props)=>{
    return(
        <div className="input">
            {props.input}
        </div>
    );
}

export default Pantalla;