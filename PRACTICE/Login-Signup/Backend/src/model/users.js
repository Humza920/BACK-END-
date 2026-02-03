const mongoose = require("mongoose")
const validator = require("validator")
const { Schema } = mongoose

const users = new Schema({
    firstname: {
        type: String,
        minLength: 3,
        maxLength: 12,
        required: true
    },
    lastname: {
        type: String,
        minLength: 3,
        maxLength: 12,
    },
    email: {
        type: String,
        index: true,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        validate(value) {
            if (!["Male", "Female", "Other"].includes(value)) {
                throw new Error("Select your Gender");
            }
        }
    }
},
    {
        collection: "users",
        timestamps: true
    }
)

const Users = mongoose.model("Users", users)
module.exports = {
    Users
}
