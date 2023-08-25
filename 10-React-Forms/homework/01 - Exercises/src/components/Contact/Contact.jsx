import React from 'react'
import { useState } from 'react';
import './Contact.modules.css'

// eslint-disable-next-line
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs){
  let errors = {}

  if(!inputs.name) {
    errors.name = 'Se requiere un nombre';
  }
 
  if(!regexEmail.test(inputs.email)){
    errors.email = 'Debe ser un correo electrónico';
  }
  
  if(!inputs.message){
    errors.message = 'Se requiere un mensaje';
  }
  
  // console.log(errors)
  return errors;
}

export default function Contact () {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) =>{
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    })

    setErrors(
      validate({
        ...inputs,
        [event.target.name]: event.target.value
      })
    )
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    const errores = [];

    if(inputs.name.trim() == ''){
      errores.push('name');
    }
    if(!regexEmail.test(inputs.email)){
      errores.push('email');
    }
    if(inputs.message.trim() == ''){
      errores.push('message');
    }

    if(errores.length === 0){
      window.alert("Los datos fueron envíados")

    }
    else{
      window.alert("Llena bien los formularios!")
    }

    // console.log(errores);
  }

  
  return(
 <form onSubmit={handleSubmit}>
    <label htmlFor="text">Nombre: </label>
    <input name = 'name' type='text' placeholder='Escribe tu nombre...' value={inputs.name} onChange={handleChange} className={errors.name && 'warning'}/>
    {errors.name ? <p>{errors.name}</p> : ''}
    <hr />

    <label htmlFor="email">Email: </label>
    <input name = 'email' type="text" placeholder='Escribe tu email...' value={inputs.email} onChange={handleChange} className={errors.name && 'warning'}/>
    {errors.email ? <p>{errors.email}</p> : ''}
    <hr />

    <label htmlFor='text'>Mensaje: </label>
    <input name = 'message' type="text" placeholder='Escribe tu mensaje...' value={inputs.message} onChange={handleChange} className={errors.name && 'warning'}/>
    {errors.message ? <p>{errors.message}</p> : ''}
    <hr />

    <button type='Submit'>Enviar</button>
 </form>
  )
}
