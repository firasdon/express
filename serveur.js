const express = require('express')
const app = express () ;


let users = [{
    name : "ghazi snousi" ,
    adres: "ghazisnu@gamil.com",
    id: 0 , 
    
} ,
{
    name : "firas lattrech",
    adres : "firas@gmail.com",
    id : 0 , 
    
},
];

app.use(express.json())

app.get("/users" ,(req , res) => {
    res.send(users);
})
app.post("/add_users" ,(req , res) =>{
    console.log(req.json)
    res.send("add your carecteristique")
} )



const port = 5004 ;
 app.listen(port, () => {
     console.log(`  the JSON serveur is working in ${port} `) ; 
 }) ; 