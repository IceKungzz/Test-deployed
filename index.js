const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/',(req,res) =>{
    res.send("Hellooooooooooooo ในที่สุดก็ได้แล้วสัสสสสเอ้ยยยยยยย")
})

app.get('/pp',(req,res) =>{
    res.send("กู Deployed Nodejs ได้แล้วไอเวรรรรร")
})

app.listen(port,()=>{
    console.log("Server is runing on port "+port);
})