const express = require('express')
const app = express();
const port = 3030;
app.get('/',(req,res)=>{
    res.send("Welcome to Node.js Unite Test cased with Moca & Chai library!")
})

app.listen(port,()=>{
    console.log(`Server listening at http://localhost:${port}`)
})