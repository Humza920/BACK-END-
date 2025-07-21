const mongoose = require("mongoose")

async function connectionWithDb() {
    await mongoose.connect("mongodb+srv://humzarehman779@cluster0.fnf1uz4.mongodb.net/classOne")
}

module.exports = {
    connectionWithDb
}