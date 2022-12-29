const { Sequelize } = require('sequelize');


//usar las variables de entorno
require('dotenv').config()


const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
  });

const conexion= async function(){
    await sequelize
    .authenticate()
    .then(
        console.log('la conexion ha sido exitosa')
    )
    .catch(err=>{
        console.error(`ha ocurrido un error: ${err}`)
    })
}

conexion()

module.exports=sequelize