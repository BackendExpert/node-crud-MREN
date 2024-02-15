const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const UserModel = require("./models/UserModel")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/crud")

app.post("/createUser", (req, res) => {
    
})

app.listen(3001,  () => {
    console.log("Server Running...!")
})