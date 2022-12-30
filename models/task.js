const { DataTypes}= require('sequelize')
const db= require('../db/conexion')

const task= db.define("task",{
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

module.exports=task