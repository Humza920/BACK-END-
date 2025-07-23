const mongoose = require("mongoose")

async function connectionWithDatabase() {
    await mongoose.connect('mongodb+srv://humzarehman779:@cluster0.fnf1uz4.mongodb.net/Auth')
}

module.exports = {
    connectionWithDatabase
}