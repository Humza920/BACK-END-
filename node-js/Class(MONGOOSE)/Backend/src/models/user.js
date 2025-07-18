const mongoose = require('mongoose')
const {Schema} = mongoose

const studentsschema = new Schema(
    {
        firstname : {type: String},
        lastname : {type: String},
        studentage : {type: Number},
        isPresentToday:{type: Boolean},
        studentemail:{type: String},
        studentpass:{type:String} 
    },
    {
        collection : "students"
    }
)

const Student = mongoose.model("Student" , studentsschema)

module.exports ={
    Student
}