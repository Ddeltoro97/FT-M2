import React from "react";
import { modulo } from "./Bienvenido";

export default function({nombre, modulo}){

    return(
        <div>
            <button onClick={() => alert(modulo)}>
                {nombre}
            </button>
        </div>
    )
}