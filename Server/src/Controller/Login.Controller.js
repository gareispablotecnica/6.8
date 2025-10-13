
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
        const hash=await hashPassword(Contraseña);

        const query=`INSERT INTO User(Usuario,Contraseña,Nombre)VALUES(?,?,?)`

        db.run(query,[Usuario,hash,Nombre],(Error)=>{
            if(Error){
                console.error('No se Pudo Registrar el Usuario ⛔',Error)
                return res.status(201).json({Error: 'El Usuario no se Encuentra Registrado'})
            }
            else{
                return res.json({
                    ID: this.lastID,
                    Usuario
                })
            }
        })

    }
    catch(Error){
        console.error(Error)
    }
}

module.exports={RegistrarUsuario};