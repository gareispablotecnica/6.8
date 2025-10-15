// --> rfec + Enter
import { useState } from 'react'
import './Layouts.css'
import axios from 'axios'

function Layouts() {

    const[Usuario,setUsuario]=useState("")
    const[Contraseña,setContraseña]=useState("")
    const[Nombre,setNombre]=useState("")

    const[Mensaje, setMensaje]=useState("")

    const handleSubmit=async(e)=>{
      e.preventDefault();
      // ---> Limpiar los Mensajes del Back
      setMensaje('');

      try{
        const Ruta= await axios.post('http://localhost:3000/api/Registrar',{
          Usuario,
          Contraseña,
          Nombre
        })
        setMensaje(Ruta.data.mensaje || 'Usuario Registrado Correctamente')
        setContraseña('');
        setUsuario('');
        setNombre('');
      }
      catch(Error){
        setMensaje('No se puede registrar el Usuario ❌')
      }
    }

  return (
    <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="">Usuario</label>
            <input type="text" name="Usuario" id="Usuario" 
            value={Usuario} onChange={e=> setUsuario(e.target.value)}/>

            <label htmlFor="">Contraseña</label>
            <input type="password" name="Contraseña" id="Contraseña" 
            value={Contraseña} onChange={e=> setContraseña(e.target.value)}/>

            <label htmlFor="">Nombre</label>
            <input type="text" name="Nombre" id="Nombre" 
            value={Nombre} onChange={e=> setNombre(e.target.value)}/>

            <input type="submit" value="Registrar" />

        </form>

        {Mensaje && <h1 style={{color:'green'}}>{Mensaje}</h1>}
    </>
  )
}

export default Layouts