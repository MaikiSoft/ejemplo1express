const express = require('express')
const app = express()
const port = 3000

app.get('/inicio',(req,res) =>{
    res.send('hola mundo lola loca')
})

app.listen(port,()=>{
    console.log(`la aplicacion se esta ejecutando por el puerto ${port}`)
} )