const mongoose = require('mongoose')
const express = require('express')
const cors = require("cors")
require("dotenv").config()
const app = express()

const UploadRoute = require("./routes/UploadRoute")

app.use(cors())
app.use(express.json())
app.use(express.static("public"))


mongoose.set('strictQuery', false)


const PORT = process.env.PORT || 5000


mongoose.connect(process.env.MONGO_URI, () => {
    console.log("Connected to MongoDB")
})

app.use(UploadRoute)

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})





