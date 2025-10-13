
const {hashPassword,ComparePassword} = require('../Utils/Hash')

const db= require('../DataBase/db')

// ---> Dependencias para Token de Seguridad
const jwc= require('jsonwebtoken')

const RegistrarUsuario=async(req,res)=>{
    try{
        const{Usuario,Contraseña,Nombre}=req.body;
        // --> Parámetros Vacios
        if(!Usuario || !Contraseña || !Nombre){
            return res.status(201).json({Error: 'Datos Vacios'})
        }
        const hash= hashPassword(Contraseña);

        const query=`INSERT INTO User(Usuario,Contraseña,Nombre)VALUES(?,?,?)`

    }
    catch(Error){

    }
}