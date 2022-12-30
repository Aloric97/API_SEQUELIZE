const fecha = new Date()

const getTime = function(req,res,next) {
    
    console.log(`hora: ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`)
    
    next()
}

const getDate = function (req, res, next) {
    
    console.log(`fecha: ${fecha.getDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`)
    console.log(' ')
    next()
}


module.exports={
    getTime,
    getDate,
}