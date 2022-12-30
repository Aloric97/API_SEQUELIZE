
const getInfo=function(req,res,next) {
    console.log('--------------------------')
    console.log(' ')
    console.log(`pagina: ${req.originalUrl} y peticion del tipo: ${req.method}`);
    console.log(' ')
    next()
}


module.exports=getInfo