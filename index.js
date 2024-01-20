const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.get('/',(req,res) =>{
    res.send("Hellooooooooooooo สสัสสสส")
})

app.listen(port,()=>{
    console.log("Server is runing on port "+port);
})