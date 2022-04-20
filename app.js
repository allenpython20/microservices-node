const express = require('express')
const cors = require('cors')

const router = require('./src/routes')

const {json,urlencoded} = express

const app = express()
const port = process.env.PORT || 8081

app.use(json());
app.use(urlencoded({extended:false}))

const corsOptions = {
    origin : '*',
    optionSuccessStatus : 200
}

app.use(cors(corsOptions))
app.use(router)

app.use('/',(req,res) => {
    res.send("Este es un microservicio")
})

app.listen(port,()=>{
    console.log("Server listening in port "+port)
})