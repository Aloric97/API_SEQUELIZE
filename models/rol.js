const { DataTypes}= require('sequelize')
const db= require('../db/conexion')

const rol= db.define("rol",{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false
    }},
    {
        timestamps:false
    }
)


module.exports=rol
