const {DataTypes } = require("sequelize");
const db = require("../db/conexion");


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



module.exports=user