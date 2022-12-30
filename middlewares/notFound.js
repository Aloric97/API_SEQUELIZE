
const notFound= function(req,res,next){
    res.status(404).json('Pagina no encontrada')
    next()
}

module.exports =notFound