const mongoose = require("mongoose")
const validator = require("validator")
const {Schema} = mongoose

const users = new Schema({
    firstname :{
        type: String,
        minLength:3,
        maxLength:12,
        required:true
    },
    lastname :{
        type: String,
        minLength:3,
        maxLength:12,
    },
    lastname :{
        type: String,
        index:true,
        unique:true,
        required:true,
        trim:true,
        lowercase:true,
        validate(value){
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email");
                
            }
        }
    },
    password:{
        type : String,
        required:true,
        minLength:8,
        validate(value){
            if (!validator.isStrongPassword(value)) {
                throw new Error("Use Strong Password");
                
            }
        }
    },
    gender:{
        type:String,
        validate(value){
            if (!["Male" , "Female" , "Other"].includes(value)) {
                throw new Error("Select your Gender");
            }
        }
    },
    profilepic:{
        type : String,
        default:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
        validate(value){
            if (!validator.isURL) {
                
            }
        }
    }
  
})