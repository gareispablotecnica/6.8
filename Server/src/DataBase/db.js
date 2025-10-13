// ---> Utilizamos la Dependencia sqlite3
const sqlite3= require('sqlite3')

// ---> Utilizamos "PATH" para indicar ubicacion
const path= require('path')

// ---> Ubicación de la Base de Datos
const dbUbicacion= path.relative(__dirname,'./Artista.db')
