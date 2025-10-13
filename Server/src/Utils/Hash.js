//---> Libreria para Encriptar
const Encriptar= require('bcrypt')

const Salto=10;

const hashPassword= async(Contraseña)=>{
    const Seguridad=await Encriptar.genSalt(Salto)
    return Encriptar.hash(Contraseña,Seguridad)
}

const ComparePassword=(Contraseña,Parametro)=>{
    return Encriptar.compare(Contraseña,Parametro)
}

module.exports={hashPassword,ComparePassword}
