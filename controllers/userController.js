const { where } = require('sequelize')
const user = require('../models/user')

const getAllUser= async function(req,res){
    const data = await user.findAll()
    .then((data)=>{
        res.status(200).json(data)
        console.log('lista de usuario completa')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al mostrar los datos')
    })
}

const createUser= async function(req, res) {
    const {name,lasName,age,address}=req.body
    const data= await user.create({name:name,lasName:lasName,age:age,address:address})
    .then((data)=>{
        res.status(200).json(data)
        console.log('usuario creado exitosamente')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al crear el usuario')
    })
}

const getUserById = async function(req,res){
    const id = req.params.id
    const data = await user.findByPk(id)
        .then((data)=>{
            res.status(200).json(data)
            console.log(`mostrando el rol ${id}`)
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })  
}

const updateUser= async (req, res) => {
    const id = req.params.id
    const {name, lasName,age,address}=req.body
    const data = await user.update({name:name,lasName:lasName,age:age,address:address},
            {where: {id:id}})
        .then((data)=>{
            res.json({message:`usuario ${id} actualizado correctamente`})
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })
}


const deleteUser= async (req, res) => {
    const id = req.params.id
    const data = await user.destroy(  
        {where: {id:id}})  
    .then((data)=>{
        res.json({message:`usuario ${id} eliminado correctamente`})
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('id no encontrado')
    })
}



module.exports={
    getAllUser,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}