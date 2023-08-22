import React from "react";
import Botones from "./Botones";

const studentName = "David Del Toro";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };

export default function Bienvenido() {
  // el código de tu componente acá
  return(
    <div>
      <h1>Hey Mor</h1>
      <h3>{studentName}</h3>
      {techSkills.map(skill =>{
        return(
          <>
          <li>{skill}</li>
          </>
        )
      })}
      <Botones nombre ='Módulo 1' modulo={alerts.m1}/>
      <Botones nombre = 'Módulo 2'modulo={alerts.m2}/>
    </div>
  )
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
