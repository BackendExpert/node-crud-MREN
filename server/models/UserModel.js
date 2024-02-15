const mongoose = require("mongoose")

const UserQuery = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
})

const UserModel = mongoose.model("users", UserQuery)
module.exports = UserModel