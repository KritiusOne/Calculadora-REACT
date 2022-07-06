import React from "react";
import '../STYLE-SHEET/pantalla.css'

const Pantalla = ({actual, anterior, opd})=>{
    return(
        <div className="input">
            {anterior}{opd}{actual}
        </div>
    );
}

export default Pantalla;