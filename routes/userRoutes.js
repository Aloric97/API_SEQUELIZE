const routes=require('express').Router()
const {getAllUser,createUser, getUserById,updateUser,deleteUser}=require('../controllers/userController')

//obtener todos los usuarios
routes.get('/AllUser',getAllUser)

//obtener un usuario por id
routes.get('/user/:id',getUserById)

//crear una usuario
routes.post('/createUser',createUser)

//actualizar una usuario
routes.put('/updateUser/:id',updateUser)

//eliminar una usuario
routes.delete('/deleteUser/:id',deleteUser)

module.exports=routes