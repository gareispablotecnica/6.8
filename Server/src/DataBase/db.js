// ---> Utilizamos la Dependencia sqlite3
const sqlite3= require('sqlite3')

// ---> Utilizamos "PATH" para indicar ubicacion
const path= require('path')

// ---> Ubicación de la Base de Datos
const dbUbicacion= path.relative(__dirname,'./Artista.db')

const db= new sqlite3.Database(dbUbicacion,(Error)=>{
    if(Error){
        console.error('No se Pudo Crear la Base de Datos ⛔')
    }
    else{
        console.log('Base de Datos Creada ✅')
        db.run(
            `
            CREATE TABLE IF NOT EXISTS User(
            ID INTEGER PRIMARY KEY AUTOINCREMENT,
            Usuario TEXT UNIQUE NOT NULL,
            Contraseña TEXT,
            Nombre TEXT
            )`,(Error)=>{
                if(Error){
                    console.error('No se Pudo Crear la Tabla ⛔')
                }
                else{
                    console.log('Tabla User Creada ✅')
                }
            })
    }
})

module.exports=db;
