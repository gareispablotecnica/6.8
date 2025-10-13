// --> rfec + Enter
import { useState } from 'react'
import './Layouts.css'

function Layouts() {

    const[Usuario,setUsuario]=useState("")
    const[Contraseña,setContraseña]=useState("")
    const[Nombre,setNombre]=useState("")

    const handleSubmit=async()=>{

    }
  return (
    <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="">Usuario</label>
            <input type="text" name="Usuario" id="" 
            value={Usuario}/>

            <label htmlFor="">Contraseña</label>
            <input type="text" name="Contraseña" id="" 
            value={Contraseña}/>

            <label htmlFor="">Nombre</label>
            <input type="text" name="Nombre" id="" 
            value={Nombre}/>

            <input type="submit" value="Registrar" />

        </form>
    </>
  )
}

export default Layouts