const mongoose = require("mongoose")

async function connectionWithDatabase() {
    await mongoose.connect(process.env.DATA_URL)
}

module.exports = {
    connectionWithDatabase
}