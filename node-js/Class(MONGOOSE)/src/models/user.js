const mongoose = require('mongoose')
const {Schema} = mongoose

const userschema = new Schema(
    {
        firstname : {type: String},
        lastname : {type: String},
        userage : {type: Number},
        isVaccinated:{type: Boolean},
        useremail:{type: String},
        userpass:{type:String} 
    },
    {
        collection : "users"
    }
)

const User = mongoose.model("User" , userschema)

module.exports ={
    User
}