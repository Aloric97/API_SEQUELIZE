const routes=require('express').Router()
const {getAllRol,createRol, getRolById,updateRol,deleteRol}=require('../controllers/rolController')

//obtener todos los roles
routes.get('/Allroles',getAllRol)

//obtener un rol por id
routes.get('/rol/:id',getRolById)

//crear un rol
routes.post('/createRol',createRol)

//actualizar un rol
routes.put('/updateRol/:id',updateRol)

//eliminar un rol
routes.delete('/deleteRol/:id',deleteRol)

module.exports=routes