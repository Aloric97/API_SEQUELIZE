const { where } = require('sequelize')
const task = require('../models/task')

const getAllTask= async function(req,res){
    const data = await task.findAll()
    .then((data)=>{
        res.status(200).json(data)
        console.log('lista de tarea completa')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al mostrar los datos')
    })
}

const createTask= async function(req, res) {
    const {name,description}=req.body
    const data= await task.create({name:name,description:description})
    .then((data)=>{
        res.status(200).json(data)
        console.log('tarea creada exitosamente')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al crear la tarea')
    })
}

const getTaskById = async function(req,res){
    const id = req.params.id
    const data = await task.findByPk(id)
        .then((data)=>{
            res.status(200).json(data)
            console.log(`mostrando el tarea ${id}`)
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })  
}

const updateTask= async (req, res) => {
    const id = req.params.id
    const {name, description}=req.body
    const data = await task.update({name:name,description:description},
            {where: {id:id}})
        .then((data)=>{
            res.json({message:`tarea ${id} actualizado correctamente`})
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })
}


const deleteTask= async (req, res) => {
    const id = req.params.id
    const data = await task.destroy(  
        {where: {id:id}})  
    .then((data)=>{
        res.json({message:`tarea ${id} eliminado correctamente`})
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('id no encontrado')
    })
}



module.exports={
    getAllTask,
    getTaskById,
    createTask,
    updateTask,
    deleteTask
}