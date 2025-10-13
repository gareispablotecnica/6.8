const Controller= require('../Controller/Login.Controller')

const express= require('express')
const Ruta= express.Router()

Ruta.post('/Registrar',Controller.RegistrarUsuario)

module.exports=Ruta;