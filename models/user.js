const { Sequelize, Model, DataTypes } = require("sequelize");
const db = require("../db/conexion");
const sequelize = require("../db/conexion");


const user= db.define("user",{
    name:
    {
        type:DataTypes.STRING,
        allowNull: false,
    },
    lasName:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull: false,
    },
    address:{
        type:DataTypes.STRING,
        allowNull: false,
    }},
    {
        timestamps:false,
    }
)

const agregarModel= async function(){
    await sequelize
    .sync({require:true})
    .then(console.log('conexion exitosa'))
    .catch(err => console.error(`error al insertar modelo:${err}`))
}

agregarModel()


module.exports=user