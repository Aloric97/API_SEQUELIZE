//importar express
const express = require('express')
const bodyParser = require('body-parser')

//ejecutar app
const app = express()

//importa base de datos
const db=require('./db/conexion')

//importar los modelos
require('./models/user')
require('./models/task')
require('./models/rol')

//import rutas
const rolRoutes = require('./routes/rolRoutes')
const taskRoutes = require('./routes/taskRoutes')
const userRoutes = require('./routes/userRoutes')

//usar las variables de entorno
require('dotenv').config()

//parsear en json
app.use(bodyParser.json())

//parsear en form-urlencoded
app.use(bodyParser.urlencoded({ extended:true}))

//importar middlewares
const {getTime,getDate}=require('./middlewares/getFecha')
const getInfo= require('./middlewares/getInfo')
const notFound= require('./middlewares/notFound')

//fecha e informacion de la pagina
app.use(getInfo)
app.use(getTime,getDate)


app.use(rolRoutes)
app.use(taskRoutes)
app.use(userRoutes)

//middleware que va al final cuando no encuentra ninguna peticion
app.use(notFound)

const conectar= async function(){
    await db
    .sync({require:true})
    .then(console.log('conexion exitosa'))
    .catch(err => console.error(`error al insertar modelo:${err}`))
}


app.listen(process.env.PORT,()=>{
    console.log(`app inicializada en ${process.env.PORT}`)
    console.log(' ')
    conectar()
    console.log('--------------------------')
})

