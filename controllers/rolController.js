const { where } = require('sequelize')
const rol = require('../models/rol')

const getAllRol= async function(req,res){
    const data = await rol.findAll()
    .then((data)=>{
        res.status(200).json(data)
        console.log('lista de rol completa')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al mostrar los datos')
    })
}

const createRol= async function(req, res) {
    const {name,description}=req.body
    const data= await rol.create({name:name,description:description})
    .then((data)=>{
        res.status(200).json(data)
        console.log('rol creado exitosamente')
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('error al crear el rol')
    })
}

const getRolById = async function(req,res){
    const id = req.params.id
    
    if (existsId(id)==true) {
        const data = await rol.findByPk(id)
        .then((data)=>{
            res.status(200).json(data)
            console.log(`mostrando el rol ${id}`)
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })  
    } else{
        res.status(404).json({message:'no existe el id'})
    }

}

const updateRol= async (req, res) => {
    const id = req.params.id
    const {name, description}=req.body
    const data = await rol.update({name:name,description:description},
            {where: {id:id}})
        .then((data)=>{
            res.json({message:`rol ${id} actualizado correctamente`})
        })
        .catch((err)=>{
            res.status(404).json(err)
            console.log('error el mostrar el id')
        })
}


const deleteRol= async (req, res) => {
    const id = req.params.id
    const data = await rol.destroy(  
        {where: {id:id}})  
    .then((data)=>{
        res.json({message:`rol ${id} eliminado correctamente`})
    })
    .catch((err)=>{
        res.status(404).json(err)
        console.log('id no encontrado')
    })
}



module.exports={
    getAllRol,
    createRol,
    getRolById,
    updateRol,
    deleteRol
}