const routes=require('express').Router()
const {getAllTask,createTask, getTaskById,updateTask,deleteTask}=require('../controllers/taskController')

//obtener todos las tareas
routes.get('/AllTask',getAllTask)

//obtener una tarea por id
routes.get('/task/:id',getTaskById)

//crear una tarea
routes.post('/createTask',createTask)

//actualizar una tarea
routes.put('/updateTask/:id',updateTask)

//eliminar una tarea
routes.delete('/deleteTask/:id',deleteTask)

module.exports=routes