const express=require("express")
const app=express()
const mongoose=require("mongoose")
const config=require("./Config/config")
const cors=require("cors")


const PORT=process.env.PORT || 5000

// mongoose.connect(config.database,{useNewUrlParser:true})
mongoose.connect(config.mlab,{useNewUrlParser:true})

const con=mongoose.connection
app.use(express.json())
app.use(cors())
con.on('open',()=>{
    console.log("Connected to "+config.mlab)
})

const UserInfo=require('./Routes/userrouter')
app.use('/user',UserInfo)

app.listen(PORT,()=>{
    console.log(`Server Running on ${PORT}`)
})