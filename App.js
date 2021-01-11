const express = require('express') ; 
 const app = express() ;

function logger (req , res , next){
    console.table({ method : req.method , path: req.url});
    next();

}
app.use(logger) ; 
app.use(express.static("Public"));





 // start serveur

 const port = 7001 ;
 app.listen(port, () => {
     console.log(`  hello word for ${port} `) ; 
 }) ; 
