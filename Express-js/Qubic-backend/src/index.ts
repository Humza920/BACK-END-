const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))