const jwt = require("jsonwebtoken")
const { Users } = require("../model/users")

const userauth = async (req , res , next) => {
    try {
        const { token } = req.cookies
        if (!token) {
            throw new Error("Token is not valid");
        } else{
            const decodedobj =await jwt.verify(token , process.env.SECRET_KEY)
            const {id} = decodedobj
            const user =await Users.findById(id)

            req.user = user
            next()
        }
    } catch (err) {
        res.status(400).send("ERROR: " + err.message);
    }
}

module.exports = userauth