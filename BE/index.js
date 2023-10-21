const express = require("express")
const app = express()
const morgan = require("morgan")
const router = require("./router")
const dotenv = require("dotenv")

dotenv.config()
const port = process.env.PORT || 3001

app.use(morgan("combined"))
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log(`app is listening on http://localhost:${port}`)
}) 